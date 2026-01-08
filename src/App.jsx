import React from 'react'
import Buttons from './Components/Buttons'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Section2 from './Components/Section2'
import FlashCards from './Components/FlashCards'
import Section3 from './Components/Section3'
import FlashCard2 from './Components/FlashCard2'
import FlashCard3 from './Components/FlashCard3'
import Points from './Components/Points'
const App = ({}) => {
  return (
    <div className="h-screen w-full bg-[#fafafa] ">
      <Navbar/>
      <Section/>
      <Section2 />
      <div className="flashmulticard flex justify-between px-5"> <FlashCards/> <FlashCard2/> <FlashCard3/></div>
      <Section3 />
      <div className="flashlastcard flex justify-between px-5 mt-10 py-10 border-t-2 border-gray-300">
         <FlashCards/> <FlashCards/> <FlashCards/>
      </div>
    </div>
  )
}

export default App
