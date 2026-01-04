import FriendshipBackground from "./FriendshipBackground";
import MemoryVideos from "./MemoryVdo";

const Hero = () => {
  return (
    <FriendshipBackground>
      <div className="relative min-h-screen w-full flex items-center justify-center text-red-600">
        {/* <div className="absolute top-10 left-10 text-red-600 text-2xl z-50">
  HERO LOADED
</div> */}
        <MemoryVideos />
      </div>
     </FriendshipBackground> 
  );
};

export default Hero;
