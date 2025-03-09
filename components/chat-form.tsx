"use client";

import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { sendMessage } from "@/actions/chat-actions";
import Image from "next/image";

export const ChatForm = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message");
    sendMessage(message as string);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-3 items-center gap-4 w-full bg-whit bg-white rounded-full"
    >
      <Input
        type="text"
        name="message"
        className="border-none focus-visible:ring-0 shadow-none py-0 h-auto"
      />
      <Button className="rounded-full shrink-0 size-8 p-2">
        <Image src="images/send-02.svg" width={20} height={20} alt="." />
      </Button>
    </form>
  );
};
