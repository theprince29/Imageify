import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Context } from "@/main";

const Hero = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useContext(Context);

  const handleClick = () => {
    if (isAuthorized) {
      navigate('/image-generate');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Notion-Style Illustrations for Your <span className="text-red-500">Market</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Transform your ideas into beautiful visuals effortlessly.
        </p>
        <Button onClick={handleClick}>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
