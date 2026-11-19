"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const bannerList = [1, 2, 3]

const Hero = () => {
  
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => bannerList.length > prev ? prev + 1 : 1)
    }, 4000)

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative top-0 left-0">
      <Image
        src={`/Hero/banner${index}.png`}
        width={1600}
        height={493}
        alt="Hero Banner"
        className="w-full h-auto"
      />

      <button className="absolute left-4 inset-y-0 flex items-center"
      onClick={() => setIndex((prev) => prev <= 1 ? bannerList.length : prev - 1)}>
        <FaArrowLeft className="box-content bg-card p-3 size-4 rounded-full hover:cursor-pointer" />
        </button>
        <button 
        className="absolute right-4 inset-y-0 flex items-center" 
        onClick={() => setIndex((prev) => prev < bannerList.length ? prev + 1 : 1)}>
        <FaArrowRight className="box-content bg-card p-3 size-4 rounded-full hover:cursor-pointer" />
        </button>
        <div className="absolute bottom-2 inset-x-0 text-center">
            {
            bannerList.map((item) => (
              <b key={item} className={`bg-card inline-block w-2 h-2 mx-2 rounded-full ${item === index ? "w-6 bg-primary" : "w-2"}`}></b>
            ))
          }
        </div>
    </div>
  );
};

export default Hero;
