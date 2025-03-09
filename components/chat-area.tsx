import { Check, CheckCheck, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChatItem } from "./chat-item";
import { type ChatItem as ChatItemI } from "@/lib/types";
import { ChatForm } from "./chat-form";
import { Chat } from "@prisma/client/edge";

export const ChatArea = ({ chatList }: { chatList: Chat[] }) => {
  return (
    <div className="mx-auto max-w-3xl w-full h-full flex-1 flex flex-col bg-slate-50">
      <div className="flex-1 space-y-10 p-4 max-h-[calc(100svh-150px)] overflow-auto">
        {chatList.map((i, idx) => (
          <ChatItem key={idx} {...i} />
        ))}
      </div>

      <ChatForm />
    </div>
  );
};
