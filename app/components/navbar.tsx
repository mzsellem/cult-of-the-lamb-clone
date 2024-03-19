'use client'

import React from 'react';

// Import your image
import TrailerRibbon from '../../public/trailer-button.png';

// Define your component
const Trailer: React.FC = () => {
  return (
    <>
      <div className='css-trailer-button'>
        <a className="flex absolute">
            <span>Watch Trailer</span>
        </a>
        {/* <div className='flex items-center ml-10'>
              <div className='text-white w-10 h-10 border'>one</div>
              <div className='text-white w-10 h-10 border'>two</div>
              <div className='text-white w-10 h-10 border'>three</div>
              <div className='text-white w-10 h-10 border'>four</div>
              <div className='text-white w-10 h-10 border'>five</div>
        </div> */}
      </div>
    </>
  );
}
export default Trailer;
