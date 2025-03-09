import { ChatForm } from "./chat-form";
import { Chat } from "@prisma/client";
import ChatList from "./chat-list";

export const ChatArea = ({ chatList }: { chatList: Chat[] }) => {
  return (
    <div className="mx-auto max-w-3xl w-full h-full flex-1 flex flex-col">
      <ChatList chatList={chatList} />
      <ChatForm />
    </div>
  );
};
