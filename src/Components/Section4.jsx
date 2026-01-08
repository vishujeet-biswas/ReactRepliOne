import React from 'react'
import TransparentBtn from './TransparentBtn'
import { FaArrowRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className="flex  justify-around mt-10 pb-10 px-5">

      <div className="Service flex flex-col justify-between  w-[420px] h-[360px] bg-grey-400 rounded-3xl">

         <div className="btn "><button className="py-1 px-2 border-slate-500 border-1 border-grey-600 rounded-full text-black">Services</button>
         <h3 className="text-2xl flex pt-7">Explore our full range of coaching, <br/>training and tennis experiences. From<br/> first serve to match point ---we've<br/>got the right program for you.</h3>
         </div>
         <div className="service-btn pb-10">
            <button className="py-2 px-4 bg-[#111] text-white flex items-center justify-center gap-1 rounded-full">Explore More <FaArrowRight className="gap-1" style={{ transform: "rotate(-40deg)" }} /></button>
         </div>

      </div>

      <div className="training relative w-[420px] h-[360px] rounded-3xl overflow-hidden">
        <div className="img w-full h-full"><img src="./Assests/batminton.png" alt="" /></div>
        <div className="btn absolute top-5 left-5  flex items-center justify-center z-10">
            <TransparentBtn className="" title="Training Programs"/>
        </div>
        <div className="mess text-xl absolute bottom-5 left-5 text-white z-10">
            <h6>Program designed for<br/>all ages and abilities.</h6>
        </div>
        <div className="arrow absolute bottom-5 right-5 rounded-full bg-[#111] p-3 text-xl text-white"><FaArrowRight className="gap-1" style={{ transform: "rotate(-40deg)" }} /></div>
      </div>

      <div className="ballcourt relative w-[420px] h-[360px] rounded-3xl overflow-hidden">
        
        <div className="img  rounded-4xl">
            <img className=" w-[450px] h-[200px] object-cover rounded-4xl" src="./Assests/BallCourt.png" alt="" />
        </div>
        <div className="btn absolute top-5 left-5  flex items-center justify-center z-10"> <TransparentBtn title="Court Access"/></div>
        <div className="para"><h5 className="text-2xl mt-3">Step into a space for built <br />players--- to grow, compete <br />and thrive.</h5></div>
        <div className="arrow-abg flex mt-3 mb-1 pl-3 gap-2">
        
         <div className="arrow w-10 h-10 flex justify-center items-center border border-slate-300  rounded-full bg-[#fafafafa] p-3 text-xl text-black"><FaArrowRight className="gap-1 w-5 h-5 " style={{ transform: "rotate(180deg)" }} /></div>
         <div className="arrow w-10 h-10 flex justify-center items-center border border-slate-300  rounded-full bg-[#fafafafa] p-3 text-xl text-black"><FaArrowRight className="gap-1 w-5 h-5 " style={{ transform: "rotate(0deg)" }} /></div>
       
        </div>
       
      </div>
      
    </div>
  )
}

export default Section4
