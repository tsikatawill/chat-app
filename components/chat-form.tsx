"use client";

import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const ChatForm = () => {
  
  return (
    <div className="flex p-3 items-center gap-4 bg-white rounded-lg">
      <form onSubmit={() => {}}>
        <Input type="text" />
        <Button>
          <Send />
        </Button>
      </form>
    </div>
  );
};
