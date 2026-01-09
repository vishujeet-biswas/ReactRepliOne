import React from 'react'

const Point = ({ count }) => {
  let dots = [];

  for (let i = 0; i < count; i++) {
    dots.push(
      <div
        key={i}
        className="point w-3.5 h-3.5 bg-sky-500 rounded-full"
      ></div>
    );
  }

  return <div className="flex gap-2">{dots}</div>;
};

export default Point;

// export default Points
