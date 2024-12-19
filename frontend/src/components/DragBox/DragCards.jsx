import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        IMAGEIFY<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dpitkojhg/image/upload/v1734586492/generated_images/e24eb1bc-e43d-4e92-a5b4-ea4ace65ed5d.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dpitkojhg/image/upload/v1734586549/generated_images/f8564752-5de3-480d-b686-9a0ce0dc659d.jpg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dpitkojhg/image/upload/v1734586601/generated_images/dfe41465-c6c0-4d9f-99c8-1f97db0dfc3f.jpg"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dpitkojhg/image/upload/v1734586679/generated_images/e23607d1-0f41-4aec-af7b-3cf2e900395c.jpg"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dpitkojhg/image/upload/v1734586728/generated_images/3864e20c-0cea-4185-b1b2-846f4e1a3a03.jpg"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://res.cloudinary.com/dpitkojhg/image/upload/v1734586794/generated_images/93ed4ebf-7e6e-42fc-a8e6-83b52ae60212.jpg"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, className }) => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const getRandomPosition = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      const randomTop = Math.random() * (containerHeight - 200); // Prevent cards from leaving the container
      const randomLeft = Math.random() * (containerWidth - 200); // Prevent cards from leaving the container

      return { top: randomTop, left: randomLeft };
    }
    return { top: "50%", left: "50%" };
  };

  useEffect(() => {
    // Set random motion every 2 seconds
    const interval = setInterval(() => {
      const newPos = getRandomPosition();
      setPosition(newPos);
    }, 2000);

    return () => clearInterval(interval);
  }, [containerRef]);

  return (
    <motion.img
      animate={{
        top: position.top,
        left: position.left,
      }}
      transition={{
        duration: 1.5, // Smooth movement duration
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
    />
  );
};
