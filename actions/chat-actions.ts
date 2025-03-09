"use server";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

async function sendMessage(message: string) {
    await prisma.chat.create({
        data: {
            message,
        },
    });
    revalidatePath("/");
}

async function getMessages() {
    const messages = await prisma.chat.findMany();

    return messages;
}

export { sendMessage, getMessages };
