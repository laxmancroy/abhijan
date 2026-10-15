'use client';

import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const navMenu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" }
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-black px-4 py-2 flex justify-between md:justify-around items-center">
            <div className="text-xl">Abhijan</div>

            <div className="flex">
            {/* Desktop Navigation Menu Bar */}
            <nav className="hidden md:flex mr-8">
                {
                    navMenu.map((item) => (
                        <Link key={item.href} href={item.href} className="px-4 py-2 hover:text-blue-700 rounded">
                            { item.name }
                            </Link>
                    )
                )
                }
            </nav>
            <button className="">
                <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Login
                </Link>
            </button>
            {/* Responsive Navigation Button */}
            <button className="md:hidden ml-8 hover:text-blue-700 hover:cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                    <MdOutlineClose size={30} />
                ) : (
                    <MdOutlineMenu size={30} />
                )}
            </button>
            {/* Mobile Navigation Menu Bar */}
            {
                isMobileMenuOpen &&
                <nav className="md:hidden bg-white absolute top-16 right-0 flex flex-col">
                {
                    navMenu.map((item) => (
                        <Link key={item.href} href={item.href} className="px-4 py-2 hover:text-blue-700 rounded">
                            { item.name }
                            </Link>
                    ))
                }
            </nav>
            }
            </div>
        </header>
    );
}

export default Header;