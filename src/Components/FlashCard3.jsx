import React from 'react'
import Points from './Points'

const FlashCard3 = () => {
  return (
    <div className="mt-10">
      <div className="flashcard3 border w-[400px] h-[350px] bg-[#F6F8FC] rounded-3xl p-4">

        <div className="flashtext flex flex-col">
          <h2 className="">100+</h2>
          <h3>Pro Coaches</h3>
          <h5>
            Certified professionals ready to boost your <br />
            game from first serve to tournament level
          </h5>
        </div>

        <div className="points flex justify-center items-center gap-3">
          <div className="point1 flex flex-col">
            <h4>Beginner</h4>
            <h4>Intermediate</h4>
            <h4>Advanced</h4>
          </div>

          <div className="point2">
            <Points />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FlashCard3
