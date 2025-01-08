"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Heading = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your attendance information, right at your fingertips. Welcome to{" "}
        <span className="underline">AtlasGuard</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        AtlasGuard is a web application that helps you manage your guard
        attendance effortlessly
      </h3>
      <Button onClick={() =>{
        router.push("/attendance")
      }}>
        Get Started <ArrowRight className="h-4 w-4 ml-auto" />
      </Button>
    </div>
  );
};

export default Heading;
