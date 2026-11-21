"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slideList = [1, 2, 3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [step, setStep] = useState(1);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);

  const prevSlide = () => {
    if (currentSlide <= 1) return;
    setCurrentSlide((prevSlide) =>
      prevSlide <= 1 ? slideList.length : prevSlide - 1,
    );
  };

  const nextSlide = () => {
    if (currentSlide === slideList.length) return;
    setCurrentSlide((prevSlide) =>
      prevSlide < slideList.length ? prevSlide + 1 : 1,
    );
  };

  useEffect(() => {
    if (slideList.length <= 1)  return;

    const timer = setTimeout(() => {
      if (currentSlide === slideList.length) {
        setStep(-1);
        setCurrentSlide(currentSlide - 1);
      } else if (currentSlide === 1) {
        setStep(1)
        setCurrentSlide(currentSlide + 1)
      } else {
        setCurrentSlide(currentSlide + step);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentSlide, step]);


  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientX - startX;

    if ((currentSlide === 1 && diff > 0) || (currentSlide === slideList.length && diff < 0)) return setMoveX(0);
    setMoveX(diff);
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (moveX > 50) prevSlide();
    if (moveX < -50) nextSlide();
    setMoveX(0);
  };

  return (
    <div
      className="relative top-0 left-0 overflow-hidden touch-pan-y"
      onTouchStart={(e) => setStartX(e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
      >
        {slideList.map((slide) => (
          <Image
            key={slide}
            src={`/Hero/banner${slide}.png`}
            width={1600}
            height={493}
            loading="eager"
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
