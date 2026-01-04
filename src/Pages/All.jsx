import React from 'react'
import Hero from './Hero.jsx'
import Know from './Know.jsx'
import Memory from './Memory.jsx'
import Message from './Message.jsx'

import FriendshipBackground from './FriendshipBackground.jsx'
const All = () => {
  return (
    <FriendshipBackground>
      <div className='flex flex-col'>
      <Hero/>
      <Know/>
      <Memory/>
      <Message/>
      </div>
    </FriendshipBackground>
  )
}

export default All
