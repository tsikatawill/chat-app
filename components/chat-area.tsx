import { Check, CheckCheck, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChatItem } from "./chat-item";
import { type ChatItem as ChatItemI } from "@/lib/types";
import { ChatForm } from "./chat-form";

export const ChatArea = () => {
  const chatItems: ChatItemI[] = [
    {
      from: "Alice John",
      time: new Date(),
      readStatus: "read",
      text: "Hello there!",
    },
    {
      from: "Bob Kenkey",
      time: new Date(),
      readStatus: "pending",
      text: "Hi Alice!",
    },
    {
      from: "Alice Koliko",
      time: new Date(),
      readStatus: "sent",
      text: "How are you?",
    },
    {
      from: "Bob Ofori",
      time: new Date(),
      readStatus: "read",
      text: "I'm good, thanks!",
    },
    {
      from: "Alice John",
      time: new Date(),
      readStatus: "read",
      text: "Great to hear!",
    },
    {
      from: "Bob Kenkey",
      time: new Date(),
      readStatus: "pending",
      text: "What about you?",
    },
    {
      from: "Alice Owusu",
      time: new Date(),
      readStatus: "sent",
      text: "I'm doing well too!",
    },
    {
      from: "Bob Ofori",
      time: new Date(),
      readStatus: "read",
      text: "Awesome!",
    },
    {
      from: "Alice John",
      time: new Date(),
      readStatus: "read",
      text: "Let's catch up soon.",
    },
    {
      from: "Bob Fiifi",
      time: new Date(),
      readStatus: "pending",
      text: "Sure, sounds good!",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl w-full h-full flex-1 flex flex-col bg-slate-50">
      <div className="flex-1 space-y-10 p-4 max-h-[calc(100svh-150px)] overflow-auto">
        {chatItems.map((i, idx) => (
          <ChatItem key={idx} {...i} />
        ))}
      </div>

      <ChatForm />
    </div>
  );
};
