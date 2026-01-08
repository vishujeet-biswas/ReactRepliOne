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
import Section4 from './Components/Section4'



const App = ({}) => {
  return (
    <div className="h-screen w-full bg-[#fafafa] ">
      <Navbar/>
      <Section/>
      <Section2 />
      <div className="flashmulticard flex justify-center gap-5 px-5"> <FlashCards/> <FlashCard2/> <FlashCard3/></div>
      <Section3 />
      <Section4 />
    </div>
  )
}

export default App
