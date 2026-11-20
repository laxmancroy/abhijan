"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slideList = [1, 2, 3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [startX, setStartX] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide <= 1 ? slideList.length : prevSlide - 1));
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < slideList.length ? prevSlide + 1 : 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (slideList.length > prevSlide ? prevSlide + 1 : 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) prevSlide();
    if (startX - endX > 50) nextSlide();
  }

  return (
    <div className="relative top-0 left-0 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}%` }}
      >
        {slideList.map((slide) => (
          <Image
            key={slide}
            src={`/Hero/banner${slide}.png`}
            width={1600}
            height={493}
            alt="Hero Banner"
            className="w-full h-auto shrink-0"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="hidden md:flex items-center absolute left-4 inset-y-0"
        onClick={() => prevSlide()}
      >
        <FaArrowLeft className="box-content bg-card/80 p-3 size-4 rounded-full hover:cursor-pointer" />
      </button>

      {/* Next Button */}
      <button
        className="hidden md:flex items-center absolute right-4 inset-y-0"
        onClick={() => nextSlide()}
      >
        <FaArrowRight className="box-content bg-card/80 p-3 size-4 rounded-full hover:cursor-pointer" />
      </button>

      {/* Banner Bottm Point */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center items-center gap-1">
        {slideList.map((slide) => (
          <button
            type="button"
            key={slide}
            className={`group w-7 h-4 flex justify-center items-center ${slide === currentSlide ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => setCurrentSlide(slide)}
          >
            <span
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${slide === currentSlide ? "w-7 bg-primary" : "w-2 bg-card/60 group-hover:bg-card"}`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
