import Image from "next/image";
import { ThemeSwitch } from "./theme-switch";

function ChatHeader() {
  return (
    <div className="h-[146px] bg-white/20 dark:bg-black/20 backdrop-blur-lg fixed top-0 w-full">
      <div className="flex justify-between h-full items-center mx-auto max-w-3xl">
        <div className="flex gap-2">
          <Image
            src={"images/logo.svg"}
            alt="logo"
            height={41}
            width={56}
            className="shrink-0"
          />
          <div>
            <h1 className="font-semibold text-2xl">BuildSync</h1>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <p>123 Members</p>
              <div className="flex items-center gap-2">
                <span className="size-2 block rounded-full bg-green-500"></span>{" "}
                200 online
              </div>
            </div>
          </div>
        </div>

        <ThemeSwitch />
      </div>
    </div>
  );
}

export default ChatHeader;
