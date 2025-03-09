"use client";
import { useRef, useLayoutEffect } from "react";
import { ChatItem } from "./chat-item";
import { Chat } from "@prisma/client";

function ChatList({ chatList }: { chatList: Chat[] }) {
  const chatListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <div
      className="flex-1 space-y-10 p-4 max-h-[calc(100svh-120px)] overflow-auto pt-[146px]"
      ref={chatListRef}
    >
      {chatList.map((i, idx) => (
        <ChatItem key={idx} {...i} />
      ))}
    </div>
  );
}

export default ChatList;
