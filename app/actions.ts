"use server";

import prisma from "@/prisma";
import webpush from "web-push";

async function sendMessage(message: string) {
  await prisma.chat
    .create({
      data: {
        message,
      },
    })
    .then(() => sendNotification(message));
}

async function getMessages() {
  const messages = await prisma.chat.findMany();
  return messages;
}

export { sendMessage, getMessages };

webpush.setVapidDetails(
  "mailto:tsikatawill@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscription: webpush.PushSubscription | null = null;

export async function subscribeUser(sub: webpush.PushSubscription) {
  subscription = sub;

  await prisma.pushNotifSubscription.create({
    data: {
      endpoint: sub.endpoint,
      p256dh: sub.keys.p256dh,
      auth: sub.keys.auth,
    },
  });

  return { success: true };
}

export async function unsubscribeUser(endpoint: string) {
  subscription = null;
  await prisma.pushNotifSubscription.delete({
    where: { endpoint },
  });
  return { success: true };
}

export async function sendNotification(message: string) {
  const subscriptions = await prisma.pushNotifSubscription.findMany();

  if (subscriptions.length === 0) {
    throw new Error("No subscriptions available");
  }

  const results = await Promise.all(
    subscriptions.map(async (sub) => {
      try {
        await webpush.sendNotification(
          {
            endpoint: sub.endpoint,
            keys: {
              p256dh: sub.p256dh,
              auth: sub.auth,
            },
          },
          JSON.stringify({
            title: "Build Sync",
            body: message,
            icon: "/images/512.png",
            badge: "/images/512.png",
          })
        );
        console.log({ success: true, endpoint: sub.endpoint });
        return { success: true, endpoint: sub.endpoint };
      } catch (error: any) {
        console.error(
          `Error sending push notification to ${sub.endpoint}:`,
          error
        );

        if (
          error.statusCode === 404 ||
          error.statusCode === 410 ||
          error.message?.includes("unsubscribed or expired")
        ) {
          try {
            await prisma.pushNotifSubscription.delete({
              where: { endpoint: sub.endpoint },
            });
            console.log(`Removed invalid subscription: ${sub.endpoint}`);
          } catch (deleteError) {
            console.error(`Failed to delete subscription: ${deleteError}`);
          }
        }

        return {
          success: false,
          endpoint: sub.endpoint,
          error: "Failed to send notification",
        };
      }
    })
  );

  return results;
}
