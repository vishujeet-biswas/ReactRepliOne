import React from 'react'
import TransparentBtn from './TransparentBtn'

const FlashCard2 = () => {
  return (
    <div className="mt-10  ">
      <div className="flashcard relative w-[420px] h-[360px] rounded-3xl overflow-hidden">
        <div className="img w-full h-full"><img className="w-full m-0 h-full object-cover rounded-4xl" src="./Assests/flashCardbox.png" alt=""/></div>
        <div className="btn absolute inset-0 flex items-center justify-center z-10">
            {/* <button className="px-4 py-3 rounded-full bg-white/25 backdrop-blur-md text-white font-medium border border-white/30">Private & Group Lessons</button> */}
            <TransparentBtn title="Private & Group Lessons"/>
        </div>
      </div>
    </div>
  )
}

export default FlashCard2
