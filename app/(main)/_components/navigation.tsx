"use client";
import { cn } from "@/lib/utils";
import {
  ChartBarBig,
  ChartLine,
  ChevronsLeft,
  ListTodo,
  LocateIcon,
  MenuIcon,
  Users2,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, {
  ComponentRef,
  ElementRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMediaQuery } from "usehooks-ts";
import UserItem from "./user-item";
import Item from "./item";

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ComponentRef<"aside">>(null);
  const navbarRef = useRef<ComponentRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);
  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty("width", `calc(100% ${newWidth}px`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);
      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
    }, 300);
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);
      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
    }, 300);
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999[",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          onClick={collapse}
          className={cn(
            `h-6 w-6 text-muted-foreground rounded-sm 
          hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-2 
          right-2 opacity-0 group-hover/sidebar:opacity-100 transition`,
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>

        <div>
          <UserItem />

          <Item
            onClick={() => router.push("/dashboard")}
            label="Dashboard"
            icon={ChartLine}
            active={pathname === "/dashboard"}
          />
          <Item
            onClick={() => router.push("/guards")}
            label="Guards"
            icon={Users2}
            active={pathname === "/guards"}
          />
          <Item
            onClick={() => router.push("/parade-points")}
            label="Parade points"
            icon={LocateIcon}
            active={pathname === "/parade-points"}
          />
          <Item
            onClick={() => router.push("/attendance")}
            label="Attendance"
            icon={ListTodo}
            active={pathname === "/attendance"}
          />
        </div>

        <div
          onMouseDown={handleMouseDown}
          onDoubleClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 
        transition cursor-ew-resize absolute h-full w-1 bg-primary/10
        right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        onClick={resetWidth}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />
          )}
        </nav>
      </div>
    </>
  );
}

export default Navigation;
