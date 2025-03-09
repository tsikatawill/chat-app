import { ChatArea } from "@/components/chat-area";
import ChatHeader from "@/components/chat-header";

export default async function Home() {
  return (
    <>
      <ChatHeader />
      <div
        className="h-screen flex flex-col overflow-hidden"
        // style={{
        //   background: "url(images/main-bg.jpg) center center/cover no-repeat",
        // }}
      >
        <ChatArea />
        <p className="text-center py-6">Built with ❤️ by Team Wazaaa</p>
      </div>
    </>
  );
}
