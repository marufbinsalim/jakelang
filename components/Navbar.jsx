"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing icons for the menu

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md border-b-2 border-blue-400">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="Vote for Jake Lang" className="h-12" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="/platform" className="hover:text-blue-600">
            PLATFORM
          </a>
          <a href="/news" className="hover:text-blue-600">
            NEWS
          </a>
          <a href="/events" className="hover:text-blue-600">
            EVENTS
          </a>
          <a href="/join" className="hover:text-blue-600">
            GET INVOLVED
          </a>
        </nav>

        {/* Buttons & Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="https://secure.winred.com/jake-lang-for-senate-inc/donate-hd?sc=winred-directory&money_bomb=false&recurring=false"
              target="_blank"
            >
              <button className="bg-red-600 text-white px-4 py-2 font-bold rounded">
                CONTRIBUTE
              </button>
            </Link>
            {/* <Link href="https://www.amazon.com/s?k=maga" target="_blank">
              <button className="bg-blue-800 text-white px-4 py-2 font-bold rounded">
                SHOP
              </button>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t-2 border-blue-400 fixed w-full h-full">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-medium min-h-max h-[60%] justify-center">
            <a href="/platform" className="hover:text-blue-600">
              PLATFORM
            </a>
            <a href="/news" className="hover:text-blue-600">
              NEWS
            </a>
            <a href="/events" className="hover:text-blue-600">
              EVENTS
            </a>
            <a href="/join" className="hover:text-blue-600">
              GET INVOLVED
            </a>
            <Link
              href="https://secure.winred.com/jake-lang-for-senate-inc/donate-hd?sc=winred-directory&money_bomb=false&recurring=false"
              target="_blank"
            >
              <button className="bg-red-600 text-white px-4 py-2 font-bold rounded w-[130px]">
                CONTRIBUTE
              </button>
            </Link>
            {/* <Link href="https://www.amazon.com/s?k=maga" target="_blank">
              <button className="bg-blue-800 text-white px-4 py-2 font-bold rounded w-[130px]">
                SHOP
              </button>
            </Link> */}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
