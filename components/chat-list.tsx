"use client";
import { useRef, useLayoutEffect, useState } from "react";
import { ChatItem } from "./chat-item";
import { Chat } from "@prisma/client";
import SupabaseListener from "./SupabaseListener";

function ChatList({ initialChatList }: { initialChatList: Chat[] }) {
    const chatListRef = useRef<HTMLDivElement>(null);
    const [chatList, setChatList] = useState<Chat[]>(initialChatList);

    useLayoutEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [chatList]);

    function handlePayload(payload: Chat) {
        setChatList((prev) => [...prev, payload]);
    }

    return (
        <SupabaseListener onPayload={handlePayload}>
            <div
                className="flex-1 space-y-10 p-4 max-h-[calc(100svh-120px)] overflow-auto pt-[146px]"
                ref={chatListRef}
            >
                {chatList.map((chat) => (
                    <ChatItem key={chat.id} {...chat} />
                ))}
            </div>
        </SupabaseListener>
    );
}

export default ChatList;
