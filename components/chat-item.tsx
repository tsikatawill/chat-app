import { CheckCheck } from "lucide-react";

import InitialsAvatar from "react-initials-avatar";
import dayjs from "dayjs";
import "react-initials-avatar/lib/ReactInitialsAvatar.css";
import { cn } from "@/lib/utils";
import { type ChatItem as ChatItemProps } from "@/lib/types";
import { Chat } from "@prisma/client/edge";

export const ChatItem = ({ createdAt, message, id }: Chat) => {
  const userId = "EB1";

  return (
    <div className={cn("flex gap-4", id === userId && "flex-row-reverse")}>
      <InitialsAvatar name={"John Doe"} />
      <div>
        <div className="p-2 bg-white border rounded-lg max-w-lg min-w-xs">
          {message}
        </div>
        <div className="flex justify-between mt-2">
          <small>{dayjs(createdAt).format("DD MMM - HH:mma")}</small>

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
