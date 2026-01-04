import React from 'react'
import Hero from '../Pages/Hero.jsx'
import Know from '../Pages/Know.jsx'
import Memory from '../Pages/Memory.jsx'
import Message from '../Pages/Message.jsx'

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
