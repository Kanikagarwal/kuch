import { useEffect, useRef, useState } from "react";

const MemoryRopeCarousel = ({ memories, speed = 1 }) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate array for infinite scroll
  const images = [...memories, ...memories];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scroll = 0;

    const step = () => {
      if (!isHovering) {
        scroll += speed; // control speed
        if (scroll >= container.scrollWidth / 2) scroll = 0; // loop
        container.scrollLeft = scroll;
      }
      requestAnimationFrame(step);
    };

    const animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [isHovering, speed]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Memories 🌸</h2>

      {/* Rope Design */}
      <div className="absolute w-full h-1 bg-black rounded-full mb-6"></div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden w-full px-6 select-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {images.map((memory, index) => {
          // Random tilt for hanging effect
          const tiltAngles = [-3, -2, -1, 0, 1, 2, 3];
          const rotate = tiltAngles[index % tiltAngles.length];

          return (
            <div
  key={index}
  className={`flex flex-col items-center min-w-37.5 transform 
    ${index % 2 === 0 ? "-rotate-3" : "rotate-3"} 
    hover:rotate-0 transition-all`}
>
  <div className="w-40 h-52 rounded-sm overflow-hidden shadow-lg">
    <img
      src={memory.image}
      alt={memory.caption || "Memory"}
      className="w-full h-full object-cover"
    />
  </div>
  
</div>

          );
        })}
      </div>
    </div>
  );
};

export default MemoryRopeCarousel;
