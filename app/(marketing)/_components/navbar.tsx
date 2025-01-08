"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/ui/toggleMode";

export const NavBar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "shadow-sm border-b"
      )}
    >
      <Logo/>

      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        Login
      </div>
      <ModeToggle/>
    </div>
  );
};
