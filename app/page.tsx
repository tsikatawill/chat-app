import { ChatArea } from "@/components/chat-area";
import { getMessages } from "@/actions/chat-actions";
import Image from "next/image";

export default async function Home() {
    const data = await getMessages();

    return (
        <div
            className="h-screen flex flex-col overflow-hidden"
            style={{
                background:
                    "url(images/main-bg.jpg) center center/cover no-repeat",
            }}
        >
            <div className="py-[26px] bg-white/20 backdrop-blur-lg sticky top-0 w-full">
                <Image
                    src={"images/logo.svg"}
                    alt="logo"
                    height={41}
                    width={56}
                    className="mx-auto"
                />
                <h1 className="font-semibold text-center text-2xl py-2">
                    BuildSync
                </h1>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                    <p>123 Members</p>
                    <div className="flex items-center gap-2">
                        <span className="size-2 block rounded-full bg-green-500"></span>{" "}
                        200 online
                    </div>
                </div>
            </div>

            <ChatArea chatList={data} />

            <p className="text-center py-6">Built with ❤️ by Team Wazaaa</p>
        </div>
    );
}
