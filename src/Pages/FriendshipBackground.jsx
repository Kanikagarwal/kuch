import React from 'react';
import FloatingDots from '../Pages/FloatingDots.jsx';
const FriendshipBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen friendship-bg overflow-hidden">
      <FloatingDots />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default FriendshipBackground;
