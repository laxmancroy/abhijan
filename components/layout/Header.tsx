"use client";

import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const navMenu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/portfolio" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 h-16 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-border bg-card/80 text-card-foreground backdrop-blur-md flex justify-between md:justify-around items-center">
      <Link href="/" className="font-righteous block text-3xl text-primary-btn">
        abhijan
      </Link>

      <div className="flex items-center justify-between text-md">
        {/* Desktop Navigation Menu Bar */}
        <nav className="hidden md:flex mr-8">
          {navMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 hover:text-primary-btn rounded"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/signin"
          className="px-6 py-2 bg-primary-btn text-white rounded-lg border hover:bg-primary-btn-hv"
        >
          Sign In
        </Link>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden ml-8 z-60 hover:text-primary-btn hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <MdOutlineClose size={30} />
          ) : (
            <MdOutlineMenu size={30} />
          )}
        </button>

        {/* Mobile Navigation Menu Bar */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 w-full h-dvh bg-black/50 backdrop-blur-xs md:hidden" onClick={() => setIsMobileMenuOpen(false)} >
            <nav className="fixed top-0 right-0 h-dvh w-64 sm:w-1/2 flex w-1/2 flex-col overflow-y-auto border-l border-gray-200 bg-card shadow-lg pt-16"  onClick={(e) => e.stopPropagation()}>
              {navMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-8 py-3 hover:text-primary-btn"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
