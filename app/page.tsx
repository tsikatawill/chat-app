import { ChatArea } from "@/components/chat-area";
import { getMessages } from "@/actions/chat-actions";
import ChatHeader from "@/components/chat-header";

export default async function Home() {
  const data = await getMessages();

  return (
    <>
      <ChatHeader />
      <div
        className="h-screen flex flex-col overflow-hidden dark:bg-[url(/images/main-bg.jpg)_center_center/cover_no-repeat]"
        // style={{
        //     background:
        //         " center center/cover no-repeat",
        // }}
      >
        <ChatArea chatList={data} />
        <p className="text-center py-6">Built with ❤️ by Team Wazaaa</p>
      </div>
    </>
  );
}
