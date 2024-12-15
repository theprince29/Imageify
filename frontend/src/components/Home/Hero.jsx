import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
        <div className="w-full max-w-2xl">

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Notion-Style Illustrations for Your{" "}
            <span className="text-red-500">Market</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Transform your ideas into beautiful visuals effortlessly.
          </p>

          {/* Input Box */}
          <div className="relative max-w-md mx-auto rounded-lg">
            <input
              type="text"
              placeholder=""
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="absolute top-3 left-4 text-gray-400">
              {!searchValue && (
                <Typewriter
                  words={[
                    "Search mountains...",
                    "Explore beaches...",
                    "Discover cities...",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </div>
            <div className="absolute right-4 top-4">
              <CiSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
