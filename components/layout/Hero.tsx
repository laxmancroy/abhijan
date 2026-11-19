"use client";

import Image from "next/image";
import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative top-0 left-0">
      <Image
        src="/Hero/banner2.webp"
        width={1600}
        height={493}
        alt="ldsjf"
        className="w-full h-auto"
      />
      <div className="absolute bottom-2 inset-x-0 text-center text-card-foreground text-5xl">.   .   .</div>
      <button className="absolute left-4 inset-y-0 flex items-center">
        <FaArrowLeft className="box-content bg-card p-3 size-4 rounded-full hover:cursor-pointer" />
        </button>
        <button className="absolute right-4 inset-y-0 flex items-center">
        <FaArrowRight className="box-content bg-card p-3 size-4 rounded-full hover:cursor-pointer" />
        </button>
    </div>
  );
};

export default Hero;
