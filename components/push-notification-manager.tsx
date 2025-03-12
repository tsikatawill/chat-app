"use client";

import {
  sendNotification,
  subscribeUser,
  unsubscribeUser,
} from "@/app/actions";
import { cn, urlBase64ToUint8Array } from "@/lib/utils";
import { Bell, BellOff } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser(serializedSub).then(() => {
      toast.success("Subscribed to push notifications");
    });
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    await unsubscribeUser(subscription?.endpoint || "").then((s) => {
      toast.success("Unsubscribed from push notifications");
    });
    setSubscription(null);
  }

  // async function sendTestNotification() {
  //   if (subscription) {
  //     await sendNotification(message);
  //     setMessage("");
  //   }
  // }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      {subscription ? (
        <>
          <button
            onClick={unsubscribeFromPush}
            title="Do not receive notifications"
            className={cn(
              "size-9 shrink-0 bg-[#F2F2F2] rounded-full dark:bg-[#242424] transition-all duration-300 ease-in-out grid place-content-center p-4 cursor-pointer text-gray-400 dark:text-white/50"
            )}
          >
            <Bell />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={subscribeToPush}
            title="Receive notifications"
            className={cn(
              "size-9 shrink-0 bg-[#F2F2F2] rounded-full dark:bg-[#242424] transition-all duration-300 ease-in-out grid place-content-center p-4 cursor-pointer text-gray-400 dark:text-white/50"
            )}
          >
            <BellOff />
          </button>
        </>
      )}
    </div>
  );
}
