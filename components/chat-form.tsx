"use client";

import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { sendMessage } from "@/actions/chat-actions";

export const ChatForm = () => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const message = formData.get("message");
        sendMessage(message as string);
    }

    return (
        <div className="flex p-3 items-center gap-4 bg-white rounded-lg">
            <form onSubmit={handleSubmit}>
                <Input type="text" name="message" />
                <Button>
                    <Send />
                </Button>
            </form>
        </div>
    );
};
