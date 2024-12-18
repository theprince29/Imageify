import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "@/main";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);

  const handleGetStarted = () => {
    navigate("/get-started"); // Redirect to "Get Started" or Sign Up page
  };

  const handleDemoClick = () => {
    navigate("/demo"); // Redirect to live demo page
  };

  return (
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
        {/* Hero Content */}
        <div className="w-full max-w-3xl z-10">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Transform Your Ideas into{" "}
            <span className="text-red-500">Beautiful Illustrations</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Generate Notion-style visuals effortlessly. Perfect for websites,
            blogs, and presentations.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              onClick={handleGetStarted}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Get Started for Free
            </Button>
            <Button
              onClick={handleDemoClick}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Try Demo
            </Button>
          </div>

          {/* Search Input Box */}
          <div className="relative mt-12 max-w-lg mx-auto rounded-lg">
            <input
              type="text"
              placeholder=""
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="absolute top-3 left-4 text-gray-400">
              {!searchValue && (
                <Typewriter
                  words={[
                    "Create blog visuals...",
                    "Design social media assets...",
                    "Generate presentation slides...",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </div>

            <div className="absolute right-4 top-3 text-gray-400">
              <CiSearch size={24} />
            </div>
          </div>
        </div>

        {/* Bottom Dissolving Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
  );
};

export default Hero;
