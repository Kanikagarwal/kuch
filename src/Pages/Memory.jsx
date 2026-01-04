import React from 'react'
import FriendshipBackground from './FriendshipBackground'
// import MemoryRope from './MemoryRope.jsx'
import MemoryRopeCarousel from './MemoryRope.jsx'
const Memory = () => {
    const polaroids = [
      { image: "/images/pic1.png", caption: "Trip to Beach" },
    { image: "/images/pic2.png", caption: "Birthday Party" },
    { image: "/images/pic3.png", caption: "Movie Night" },
    { image: "/images/pic4.png", caption: "Late-night Talks" },
    { image: "/images/pic5.png", caption: "Random Adventure" },
    { image: "/images/pic6.png", caption: "Coffee Time" },
    { image: "/images/pic7.png", caption: "Fun Memories" },
    { image: "/images/pic8.png", caption: "Fun Memories" },
    { image: "/images/pic9.png", caption: "Fun Memories" },
    { image: "/images/pic10.png", caption: "Fun Memories" },
    { image: "/images/pic11.png", caption: "Fun Memories" },
    { image: "/images/pic12.png", caption: "Fun Memories" },
    { image: "/images/pic13.png", caption: "Fun Memories" },
    { image: "/images/pic14.png", caption: "Fun Memories" },
    { image: "/images/pic15.png", caption: "Fun Memories" },
    { image: "/images/pic16.png", caption: "Fun Memories" },
    { image: "/images/pic17.png", caption: "Fun Memories" },
    { image: "/images/pic18.png", caption: "Fun Memories" },
    { image: "/images/pic19.png", caption: "Fun Memories" },
    ];
  return (

    <FriendshipBackground>
    <div className='relative min-h-screen bg-transparent w-screen flex items-center justify-center text-6xl font-bold text-white'>
      <MemoryRopeCarousel memories={polaroids} speed={0.5} />
    </div>

    </FriendshipBackground>
  )
}

export default Memory
