import React from 'react'
import Points from './Points'

const FlashCard3 = () => {
  return (
    <div className="mt-10">
      <div className="flashcard3 flex flex-col justify-around border w-[420px] h-[360px] bg-[#F6F8FC] rounded-3xl pl-7">

        <div className="flashtext flex flex-col gap-0.5">

          <h2 className="font-bold text-4xl">100+</h2>
          <h3 className="text-lg font-semibold">Pro Coaches</h3>
          <h5 className="text-[#717C8A]">
            Certified professionals ready to boost your <br />
            game from first serve to tournament level.
          </h5>

        </div>

        <div className="points flex items-center justify-between gap-3 border">

          <div className="point1 border w-[50%] ">
            <h4>Beginner</h4><br/>
            <h4>Intermediate</h4><br/>
            <h4>Advanced</h4>
          </div>

           <div className="point2 border">
            <Points />
          </div>

          <div className="number">
            <h4>50</h4><br/>
            <h4>40</h4><br/>
            <h4>35</h4>
          </div>

        </div>
        
        

      </div>
    </div>
  )
}

export default FlashCard3
