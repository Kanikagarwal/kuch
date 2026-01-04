import React, { useState } from "react";
import FriendshipBackground from "./FriendshipBackground";

const Message = () => {
  const [opened, setOpened] = useState(false);

  return (
    <FriendshipBackground>
    <div className="relative min-h-screen flex flex-col items-center justify-center  px-6 py-12">

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-center">
        A Special Message 💌
      </h2>

      {/* Giant Envelope */}
      <div
        className={`relative w-[70vw] h-[70vh] max-w-4xl cursor-pointer transform transition-all duration-700 
          ${opened ? "scale-105 -rotate-2" : "animate-bounce"}
        `}
        onClick={() => setOpened(!opened)}
      >
        {/* Envelope body */}
        <div
          className={`absolute w-full h-full flex items-center justify-center text-9xl md:text-[10rem] font-bold text-gray-600 transition-transform duration-700 origin-top ${
            opened ? "rotateX-180" : ""
          }`}
        >
          ✉️
        </div>

        {/* Hidden message */}
        {opened && (
          <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl shadow-2xl p-12 md:p-20 flex items-center justify-center text-center text-gray-800 font-semibold text-lg md:text-2xl">
            Kesa lga🌸? <br />
            Kya bolu🤔 expressive nhi hu na🥲 <br />
            Kuch bolungi to cringe boldoge 🙄<br />
            Ha ek to cringe mat bolna isko padhke😂 <br />
            Bas man kiya to bana diya😉<br/>
            Vese gpt ne bohot help ki hai but emotions mere h sirf🙄<br/>
            Dobara dekho ya fir bhago koi special message nahi hai😂<br/>
            (already bol chuki hu sab)<br/>
            🤗 lgau lgau thande haath lgau

          </div>
        )}
      </div>

      <p className="mt-10 text-gray-700 text-center text-lg md:text-xl max-w-2xl">
        Click the envelope to reveal your message!
      </p>
    </div>
    </FriendshipBackground>
  );
};

export default Message;
