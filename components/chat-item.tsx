import { CheckCheck } from "lucide-react";

import InitialsAvatar from "react-initials-avatar";
import dayjs from "dayjs";
import "react-initials-avatar/lib/ReactInitialsAvatar.css";
import { cn } from "@/lib/utils";
import { type ChatItem as ChatItemProps } from "@/lib/types";

export const ChatItem = ({ from, time, readStatus, text }: ChatItemProps) => {
  const userName = "Alice John";

  return (
    <div className={cn("flex gap-4", userName === from && "flex-row-reverse")}>
      <InitialsAvatar name={from} />
      <div>
        <div className="p-2 bg-white border rounded-lg max-w-lg min-w-xs">
          {text}
        </div>
        <div className="flex justify-between mt-2">
          <small>{dayjs(time).format("DD MMM - HH:mma")}</small>

          {readStatus === "pending" ? (
            <CheckCheck />
          ) : (
            <CheckCheck
              className={cn(
                readStatus === "read" ? "text-green-500" : "text-inherit"
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
