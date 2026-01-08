import React from 'react'

const TransparentBtn = ({ title }) => {
  return (
    <div>
      <button className="px-4 py-2 rounded-full bg-white/25 backdrop-blur-md text-white font-medium border border-white/30">{title}</button>
    </div>
  )
}

export default TransparentBtn
