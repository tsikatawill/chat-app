import { ChatForm } from "./chat-form";
import ChatList from "./chat-list";
import { getMessages } from "@/actions/chat-actions";

export const ChatArea = async () => {
    const data = await getMessages();

    return (
        <div className="mx-auto max-w-3xl w-full h-full flex-1 flex flex-col">
            <ChatList initialChatList={data} />
            <ChatForm />
        </div>
    );
};
