"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu open/close

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`${
          scrolled
            ? "bg-blue-700 shadow-lg transform transition-all duration-300 scale-105"
            : "bg-gradient-to-r from-blue-500 to-blue-600"
        } p-4 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="text-3xl font-bold animate-fade-in">
            <Link href="/">Ghifar's Tech</Link>
          </div>
          <div className="flex items-center gap-8 lg:hidden">
            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links for Larger Screens */}
          <nav className="hidden lg:flex gap-8 font-bold animate-fade-in">
            <Link
              href="/about"
              className="text-lg hover:text-yellow-400 transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-lg hover:text-yellow-400 transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="/teams"
              className="text-lg hover:text-yellow-400 transition-all duration-300"
            >
              Teams
            </Link>
          </nav>
          {/* Button for Larger Screens */}
          <button className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hidden lg:block">
            Daftar Kursus
          </button>
        </div>
      </header>

      {/* Mobile Menu (Hidden by default, shown when 'isOpen' is true) */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-blue-600 p-4 absolute top-16 w-full left-0 transition-all duration-300`}
      >
        <nav className="flex flex-col gap-6 font-bold">
          <Link
            href="/about"
            className="text-lg text-white hover:text-yellow-400 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-lg text-white hover:text-yellow-400 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/teams"
            className="text-lg text-white hover:text-yellow-400 transition-all duration-300"
          >
            Teams
          </Link>
        </nav>
        {/* Button for Mobile */}
        <button className="bg-yellow-400 text-blue-800 px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 mt-4">
          Daftar Kursus
        </button>
      </div>
    </div>
  );
}
