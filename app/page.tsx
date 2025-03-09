import { ChatArea } from "@/components/chat-area";
import { getMessages } from "@/actions/chat-actions";

export default async function Home() {
    const data = await getMessages();

    console.log(data);

    return (
        <div
            className="h-screen flex flex-col overflow-hidden"
            // style={{
            //   background:
            //     "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(assets/bg.jpg)",
            // }}
        >
            <div className="py-6 bg-white">
                <h1 className="font-semibold text-center text-2xl">Chat App</h1>
            </div>

            <ChatArea />
        </div>
    );
}
