import { ChatItem } from "./chat-item";
import { ChatForm } from "./chat-form";
import { Chat } from "@prisma/client";

export const ChatArea = ({ chatList }: { chatList: Chat[] }) => {
  return (
    <div className="mx-auto max-w-3xl w-full h-full flex-1 flex flex-col">
      <div className="flex-1 space-y-10 p-4 max-h-[calc(100svh-280px)] overflow-auto">
        {chatList.map((i, idx) => (
          <ChatItem key={idx} {...i} />
        ))}
      </div>

      <ChatForm />
    </div>
  );
};
