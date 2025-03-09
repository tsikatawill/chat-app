import prisma from "@/prisma";

async function sendMessage(message: string) {
    await prisma.chat.create({
        data: {
            message,
        },
    });

    return { message };
}