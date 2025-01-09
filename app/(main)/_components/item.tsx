import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ItemProps {
  label: string;
  onClick: () => void;
  icon: LucideIcon;
  active: boolean;
}
const Item = ({ label, onClick, icon: Icon, active }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: "12px" }}
      className={cn(
        "group min-h-[27px] text-sm py-3 pr-3 w-full hover:bg-primary/5 flex items-center  font-medium",
        active ? "bg-primary/10" : "text-muted-foreground"
      )}
    >
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};

export default Item;
