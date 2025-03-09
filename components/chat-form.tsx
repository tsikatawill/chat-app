"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { sendMessage } from "@/actions/chat-actions";
import useChatStore from "@/lib/store/chat-store";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

export const ChatForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { addPendingChat } = useChatStore();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const message = formData.get("message");

        if (message && message?.toString().trim() === "") {
            toast.error("Enter a message to send");
            return;
        }

        addPendingChat(message as string);
        sendMessage(message as string);
        formRef.current?.reset();
    }

    return (
        <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex p-3 items-center gap-4 w-full dark:bg-[#1C1C1C] bg-white rounded-full"
        >
            <Input
                type="text"
                name="message"
                placeholder="Type a message"
                className="border-none dark:placeholder:text-white/30 focus-visible:ring-0 shadow-none py-0 h-auto"
            />
            <Button className="rounded-full shrink-0 size-8 p-2 dark:invert">
                <Image
                    className="dark:invert"
                    src="images/send-02.svg"
                    width={20}
                    height={20}
                    alt="."
                />
            </Button>
        </form>
    );
};
