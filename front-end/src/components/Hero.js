import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mpt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#05dfe3] font-bold p-4'>
           WORK SMARTER , NOT HARDER
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
            With Lead
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Align tasks to
          </p>
          <ReactTyped 
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['achieve ', ' maximum ', 'impact ']}
            typeSpeed={120}
            backSpeed={140}
                     loop
                />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'> Align tasks with company goals for maximum impact for maximum impact.</p>
        <button className='bg-[#7cfcfe] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
