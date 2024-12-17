import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

      {/* Navigation Links and Avatar - Hidden on desktop */}
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
          to="/Examples"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          Examples
        </Link>
        <Link
          to="/pricing"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          Pricing
        </Link>
        <Link
          to="/faq"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 lg:inline"
        >
          FAQ
        </Link>

        {/* Profile Avatar - Visible only when menu is open on mobile */}
        <div className="block mt-4 lg:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </button>
          {dropdownOpen && (
            <div className="absolute right-4 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setDropdownOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  // Handle logout logic here
                  setDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Image - Desktop Only */}
      <div className="hidden lg:block">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setDropdownOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                // Handle logout logic here
                setDropdownOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
