import { useEffect, useRef } from "react";

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

  // 🔹 Autoplay ALL videos muted on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;

      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.play().catch(() => {});
    });
  }, []);

  // 🔹 Auto-scroll horizontally
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Capturing U 🎥
      </h2>

      <div
        ref={containerRef}
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
              preload="auto"
              className="w-full aspect-9/16 rounded-2xl shadow-xl bg-black scale-95"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryVideos;
