'use client';

import { useState } from "react";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

const banners = [
    "/Hero/banner1.webp",
    "/Hero/banner2.webp",
    "/Hero/banner3.webp",
];


const Hero = () => {

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? banners.length - 1 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === banners.length - 1 ? 0 : current + 1);
    }

    return (
        <section className="relative w-full overflow-hidden">
            <div className="w-full">
                <Image
                    src={banners[current]}
                    alt="Hero Banner"
                    width={1920}
                    height={600}
                    priority={current === 0}
                    className="w-full h-auto object-cover block"
                />
            </div>

            {/* Left and right overlay button */}
            <button onClick={prevSlide} className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 hover:cursor-pointer w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/99 hover:bg-white border border-gray-800 text-gray-800 flex items-center justify-center shadow-md transition active:scale-95">
                <GrPrevious />
            </button>

            <button onClick={nextSlide} className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 hover:cursor-pointer w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/99 hover:bg-white border border-gray-800 text-gray-800 flex items-center justify-center shadow-md transition active:scale-95">
                <GrNext />
            </button>
        </section>
    )
}

export default Hero;