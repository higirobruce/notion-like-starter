import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo_1.png"
        alt="logo"
        //   className="h-10 w-10"
        width={50}
        height={50}
      />
      <p className={cn("font-semibold", font.className)}>AtlasGuard</p>
    </div>
  );
}

export default Logo;
