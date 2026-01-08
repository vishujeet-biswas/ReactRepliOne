import React from 'react'
import Buttons from './Buttons'
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-7.5 pt-8">
      <div className="horizon font-bold text-2xl">Horizon Courts</div>

      <div className="navbtns flex items-center gap-8">
        <Buttons title="About Us"/>
        <Buttons title="Services"/>
        <Buttons title="Coaches"/>
        <Buttons title="Events"/>
        <Buttons title="Contacts"/>
       
      </div>
      <div className="btn">
        <button className="py-2 px-4 bg-[#111] text-white flex items-center justify-center gap-1 rounded-full">Book Now <FaArrowRight className="gap-1" style={{ transform: "rotate(-40deg)" }} /></button>
      </div>
    </div>
  )
}

export default Navbar
