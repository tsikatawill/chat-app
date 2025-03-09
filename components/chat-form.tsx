"use client";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { sendMessage } from "@/actions/chat-actions";
import { useRef } from "react";
export const ChatForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const message = formData.get("message");
        sendMessage(message as string);

        formRef.current?.reset();
    }

    return (
        <div className="flex p-3 items-center gap-4 bg-white rounded-lg">
            <form className="w-full" ref={formRef} onSubmit={handleSubmit}>
                <Input type="text" className="w-full" name="message" />
                <Button className="w-full">
                    <Send />
                </Button>
            </form>
        </div>
    );
};
