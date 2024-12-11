import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-2 px-4 border-b border-gray-200 bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 17.25L7.5 12h9l-2.625 5.25m-7.5 0H4.5a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 014.5 3.75h15a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-2.625"
          />
        </svg>
        <span className="font-bold text-xl">Lorem</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

      {/* Navigation Links - Hidden on mobile */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-12 left-0 w-full bg-white lg:flex lg:space-x-4 lg:static lg:w-auto`}
      >
        <Link
          to="/"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          Home
        </Link>
        <Link
          to="Examples"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          Examples
        </Link>
        <Link
          to="#pricing"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          Pricing
        </Link>
        <Link
          to="#faq"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          FAQ
        </Link>
      </div>

      {/* Profile Image */}
      <div className="hidden lg:block">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
