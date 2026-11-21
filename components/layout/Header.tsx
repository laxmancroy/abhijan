"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { MdOutlineMenu } from "react-icons/md";
import Navbar from "@/components/layout/Navbar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 px-6 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-card/80 before:backdrop-blur-md before:border-b before:border-bdr">
      <div className="container h-full mx-auto flex justify-between md:justify-around items-center">
        <Link href="/" className="font-righteous block text-primary text-3xl">
          abhijan
        </Link>

        <div className="flex items-center justify-between">
          {/* Desktop Navigation Menu Bar */}

          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <ThemeToggle />

          {/* Desktop Sign In Button */}
          <Link
            href="/signin"
            className="px-6 py-2 bg-primary text-primary-fg font-bold rounded-lg hocus:bg-primary-hocus truncate"
          >
            Sign In
          </Link>

          {/* Mobile Navigation Toggle Button */}
          <button
            className="md:hidden ml-4 hover:text-primary-btn hover:cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MdOutlineMenu size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
