"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Activity,
  ChevronsLeftRight,
  HelpCircle,
  ListTodo,
  Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Item from "./item";

function UserItem() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://avatars.githubusercontent.com/u/11076185?v=4" />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              Bruce &apos;s work
            </span>
          </div>
          <ChevronsLeftRight className="h-4 w-4 rotate-90 ml-7 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            higirobru@gmail.com
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://avatars.githubusercontent.com/u/11076185?v=4" />
              </Avatar>
            </div>

            <div className="space-y-1">
              <p className="text-sm line-clamp-1">Bruce &apos;s work</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 p-2 text-muted-foreground">
          <Button variant={"outline"} size={"xs"}>
            <Settings className="h-4 w-4" />
            Settings
          </Button>

          <Button variant={"outline"} size={"xs"}>
            <Activity className="h-4 w-4" />
            Activity
          </Button>
        </div>

        <DropdownMenuSeparator />

        <div
          role="button"
          className="group min-h-[27px] text-xs my-3 py-1 p-2 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded"
        >
          <HelpCircle className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
          <span className="truncate">Help</span>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="w-full cursor-pointer">
          <Button
            onClick={() => {
              router.push("/");
            }}
            variant="ghost"
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserItem;
