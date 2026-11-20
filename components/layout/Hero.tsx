"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const bannerList = [1, 2, 3];

const Hero = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (bannerList.length > prev ? prev + 1 : 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative top-0 left-0 overflow-hidden">
      <div
        className="flex transition-transforem duration-500 ease-in-out"
        style={{ transform: `translateX(-${(index - 1) * 100}%` }}
      >
        {bannerList.map((item) => (
          <Image
            key={item}
            src={`/Hero/banner${item}.png`}
            width={1600}
            height={493}
            alt="Hero Banner"
            className="w-full h-auto shrink-0"
          />
        ))}
      </div>
      <button
        className="absolute left-4 inset-y-0 flex items-center"
        onClick={() =>
          setIndex((prev) => (prev <= 1 ? bannerList.length : prev - 1))
        }
      >
        <FaArrowLeft className="box-content bg-card/80 p-3 size-4 rounded-full hover:cursor-pointer" />
      </button>
      <button
        className="absolute right-4 inset-y-0 flex items-center"
        onClick={() =>
          setIndex((prev) => (prev < bannerList.length ? prev + 1 : 1))
        }
      >
        <FaArrowRight className="box-content bg-card/80 p-3 size-4 rounded-full hover:cursor-pointer" />
      </button>

      {/* Banner Bottm Point */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center items-center gap-1">
        {bannerList.map((item) => (
          <button
            type="button"
            key={item}
            className={`group w-7 h-4 flex justify-center items-center ${item === index ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => setIndex(item)}
          >
            <span
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${item === index ? "w-7 bg-primary" : "w-2 bg-card/60 group-hover:bg-card"}`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
