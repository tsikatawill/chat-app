"use server";
import prisma from "@/prisma";

async function sendMessage(message: string) {
  await prisma.chat.create({
    data: {
      message,
    },
  });
}

async function getMessages() {
  const messages = await prisma.chat.findMany();
  return messages;
}

export { sendMessage, getMessages };
