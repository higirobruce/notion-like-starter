import React from "react";
import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image src="/login.svg" fill className="object-contain" alt="Login" />
        </div>

        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/security.svg"
            fill
            className="object-contain"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
