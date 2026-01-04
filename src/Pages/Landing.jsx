import React from 'react'
import FriendshipBackground from '../Pages/FriendshipBackground.jsx'

const Landing = ({goToNext}) => {
  // const handleStart = () => {
  //   NavigationHistoryEntry("/journey")
  // }
  return (
     <FriendshipBackground>
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#3a3a3a] mb-6">
          To Someone Special
        </h1>

        <p className="max-w-xl mx-auto text-lg text-[#555] mb-8">
          Some people make life softer just by being in it.
          This is for U.
        </p>
        <button onClick={goToNext} className="px-8 py-3 rounded-full bg-[#ffb703] text-black font-semibold
                           hover:bg-[#ffd166] transition duration-300 shadow-md">
          Start the Journey →
        </button>
      </div>
    </FriendshipBackground>
  )
}

export default Landing
