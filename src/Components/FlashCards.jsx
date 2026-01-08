import React from 'react'

const FlashCards = () => {
  return (
    <div className="mt-10 px-3 ">
      <div className="flashcard flex flex-col p-4 justify-between border-1 bg-[#0D1A2D] w-[420px] h-[360px] rounded-3xl">
        <div className="emo w-40 h-40 pl-0"><img className=" object-cover " src=".\Assests\table-court-home.png" alt=""/></div>
        <div className="para mt-1 pb-7 text-xl"><span className="text-white">Professional hard courts</span><br/><span className="text-[#647387]">with tournament-grade</span><br/><span className="text-[#647387]">lighting & climate control---</span> <br/> <span className="text-[#647387]"> play in</span> <span className="text-white"> perfect conditons,</span><br/><span className="text-white">in any season.</span> 
        </div>
        <div className="btn-switch flex gap-4 pb-3">
            {/* <button className="py-1 px-2 w-15 h-7 bg-[#2EB3FF] text-center flex justify-center items-center rounded-4xl"><div className="w-6 h-6 fixed right-0 text-[#FFFFFF] text-[15px] font-extrabold rounded-full">O</div></button>
            <h6 className="text-[#657486] text-center">Game Mode</h6> */}
            <div className="mt-auto flex items-center gap-3">
        <div className="w-12 h-6 bg-sky-500 rounded-full relative">
          <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-1/2 -translate-y-1/2"></div>
        </div>
        <span className="text-gray-400 text-sm">Game Mode</span>
      </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCards
