import React from "react";
import Navigation from "./_components/navigation";
import { NavBar } from "../(marketing)/_components/navbar";
import { ModeToggle } from "@/components/ui/toggleMode";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex dark:bg-['#1F1F1F']">
      <Navigation />

      <main className="flex-1 h-full overflow-y-auto">
        <div className="flex w-full p-1">
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
