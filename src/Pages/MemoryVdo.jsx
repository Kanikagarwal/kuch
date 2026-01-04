import { useEffect, useRef, useState } from "react";

const videos = [
  "https://res.cloudinary.com/ddvevjjoh/video/upload/v1767543867/vid9_aadqsr.mp4",
  "https://res.cloudinary.com/ddvevjjoh/video/upload/v1767543842/vid2_v2dyx6.mp4",
  "https://res.cloudinary.com/ddvevjjoh/video/upload/v1767543840/vid4_xbitnu.mp4",
  "https://res.cloudinary.com/ddvevjjoh/video/upload/v1767543843/vid6_clzuwz.mp4",
  "https://res.cloudinary.com/ddvevjjoh/video/upload/v1767543833/vid8_z1v38g.mp4",
];

const MemoryVideos = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollRef = useRef(null);

  // 🔹 Detect center video
  const detectCenterVideo = () => {
    const container = containerRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      const parent = video.parentElement;
      const videoCenter = parent.offsetLeft + parent.offsetWidth / 2;

      const distance = Math.abs(center - videoCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // 🔹 Play only active video (muted autoplay)
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.muted = true;
        video.loop = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  // 🔹 Auto-scroll horizontally
  useEffect(() => {
    const container = containerRef.current;

    autoScrollRef.current = setInterval(() => {
      if (!container) return;
      container.scrollBy({ left: 320, behavior: "smooth" });

      // Update center video after scroll
      setTimeout(detectCenterVideo, 500);
    }, 4000);

    return () => clearInterval(autoScrollRef.current);
  }, []);

  // 🔹 Handle manual scroll
  const handleScroll = () => {
    detectCenterVideo();
    clearInterval(autoScrollRef.current); // stop auto-scroll when user scrolls manually
  };

  // 🔊 Enable sound on click
  const enableSound = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.muted = false;
    video.play();
  };

  return (
    <div className="w-full py-12">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Capturing U 🎥
      </h2>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide"
      >
        {videos.map((video, index) => (
          <div key={index} className="min-w-70 snap-center flex justify-center">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              autoPlay
              muted
              loop
              playsInline
              onClick={() => enableSound(index)}
              className={`w-full aspect-9/16 rounded-2xl shadow-xl bg-black transition-all duration-500 cursor-pointer ${
                index === activeIndex
                  ? "scale-105 ring-4 ring-pink-300"
                  : "scale-95 opacity-80"
              }`}
            />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default MemoryVideos;
