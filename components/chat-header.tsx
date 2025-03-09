import Image from "next/image";

function ChatHeader() {
  return (
    <div className="h-[146px] flex flex-col justify-center bg-white/20 backdrop-blur-lg fixed top-0 w-full">
      <Image
        src={"images/logo.svg"}
        alt="logo"
        height={41}
        width={56}
        className="mx-auto"
      />
      <h1 className="font-semibold text-center text-2xl py-2">BuildSync</h1>
      <div className="flex justify-center gap-4 text-sm text-gray-500">
        <p>123 Members</p>
        <div className="flex items-center gap-2">
          <span className="size-2 block rounded-full bg-green-500"></span> 200
          online
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
