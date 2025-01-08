import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Attendance() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      
      <Image
        src="/UnboxingDoodle.svg"
        width={300}
        height={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/UnboxingDoodle-dark.svg"
        width={300}
        height={300}
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="font-bold text-3xl">Welcome to AtlasGuard</h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Attendance
      </Button>
    </div>
  );
}
