import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this utility function is properly implemented or replace it.

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);

  // Create independent animation controls for each column
  const controlsFirst = useAnimationControls();
  const controlsSecond = useAnimationControls();
  const controlsThird = useAnimationControls();

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Function to start infinite animations for all columns
  const startInfiniteAnimations = () => {
    controlsFirst.start({
      y: [0, -2000], // Adjust based on content height
      transition: {
        duration: 22, // Adjust speed
        repeat: Infinity,
        ease: "linear",
      },
    });

    controlsSecond.start({
      y: [0, -2000], // Moves in opposite direction
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });

    controlsThird.start({
      y: [0, -2000], // Same as first column
      transition: {
        duration: 23,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  // Start animations when the component mounts
  useEffect(() => {
    startInfiniteAnimations();
  }, []); // Ensure it runs only once on mount

  return (
    <div
      className={cn("h-[45rem] items-start overflow-hidden w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* First column */}
        <motion.div className="grid gap-10" animate={controlsFirst}>
          {firstPart.map((el, idx) => (
            <motion.div key={"grid-1" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Second column */}
        <motion.div className="grid gap-10" animate={controlsSecond}>
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Third column */}
        <motion.div className="grid gap-10" animate={controlsThird}>
          {thirdPart.map((el, idx) => (
            <motion.div key={"grid-3" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
