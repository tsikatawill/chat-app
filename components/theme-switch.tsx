"use client";

import { type Theme } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;
    if (theme === "light") {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
      }
    } else {
      if (!html.classList.contains("dark")) {
        html.classList.add("dark");
      }
    }
  }, [theme]);

  return (
    <div className="p-1.5 bg-[#F2F2F2] dark:bg-[#242424] rounded-full flex items-center gap-1">
      <RoundThingy
        state="light"
        active={theme === "light"}
        action={() => {
          setTheme("light");
        }}
      />
      <RoundThingy
        state="dark"
        active={theme === "dark"}
        action={() => {
          setTheme("dark");
        }}
      />
    </div>
  );
};

function RoundThingy({
  action,
  active,
  state,
}: {
  action: () => void;
  state: Theme;
  active: boolean;
}) {
  const icons: Record<Theme, React.ReactNode> = {
    dark: <MoonStar size={16} />,
    light: <Sun size={16} />,
  };
  return (
    <button
      onClick={action}
      className={cn(
        "size-8 shrink-0 rounded-full transition-all duration-300 ease-in-out grid place-content-center p-4 cursor-pointer text-gray-400 dark:text-white/50",
        active
          ? "bg-white dark:bg-[#141414] shadow-md shadow-slate-200 dark:shadow-none text-black dark:text-white"
          : "bg-transparent"
      )}
    >
      {icons[state]}
    </button>
  );
}
