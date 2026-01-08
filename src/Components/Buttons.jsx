import React from 'react'

const Buttons = ({title}) => {
  return (
    <div>
      <button className="py-1 px-2  hover:border-1 rounded-full shadow-[#d4d4d4]">{title}</button>
    </div>
  )
}

export default Buttons
