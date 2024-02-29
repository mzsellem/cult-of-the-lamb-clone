'use client'

import React from 'react';

// Import your image
import TrailerRibbon from '../../public/trailer-button.png';

// Define your component
const Trailer: React.FC = () => {
  return (
    <>
     <div className="relative flex">
        {/* Image */}
        <img src={TrailerRibbon.src} alt="Example" className="block" />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-start translate-x-36">
          {/* Text */}
          <span className="text-white text-xl font-bold">Watch Trailer</span>
        </div>
        <div className='flex ml-10'>
          <div className='text-white w-10 h-10 border'>one</div>
          <div className='text-white w-10 h-10 border'>two</div>
          <div className='text-white w-10 h-10 border'>three</div>
          <div className='text-white w-10 h-10 border'>four</div>
          <div className='text-whitew-10 h-10 border'>five</div>
        </div>
    </div>
    </>
  );
}
export default Trailer;
