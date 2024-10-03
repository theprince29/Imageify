import React from 'react'
import { Input } from '../ui/input'

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
      <div className="w-full max-w-2xl">
        {/* Discord Button */}
        {/* <div className="flex justify-end mb-4">
          <a
            href="#"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-md"
          >
            <img
              src="discord-icon-url" // replace with actual discord icon URL
              alt="Discord"
              className="w-5 h-5"
            />
            <span>Join our community on Discord</span>
          </a>
        </div> */}

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
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="a snowy mountain peak with"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero