"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import Navbar from "@/components/layout/Navbar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 sticky top-0 z-30 h-16 px-6 border-b border-bdr backdrop-blur-md">
      <div className="container h-full mx-auto flex justify-between md:justify-around items-center">
        <Link
          href="/"
          className="font-righteous block text-3xl text-primary"
        >
          abhijan
        </Link>

        <div className="flex items-center justify-between">
          {/* Desktop Navigation Menu Bar */}

          <Navbar isMobileMenuOpen={ isMobileMenuOpen } setIsMobileMenuOpen={ setIsMobileMenuOpen } />

          <ThemeToggle />

          {/* Desktop Sign In Button */}
          <Link
            href="/signin"
            className="px-6 py-2 bg-primary text-primary-fg rounded-lg border hover:bg-primary-hv truncate"
          >
            Sign In
          </Link>

          {/* Mobile Navigation Toggle Button */}
          <button
            className="md:hidden ml-4 z-60 hover:text-primary-btn hover:cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <MdOutlineClose size={30} />
            ) : (
              <MdOutlineMenu size={30} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
