import React from 'react';

import Ai from '../assets/ai-sm.png';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Ai} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#59c1d8] font-bold '>LEAD DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage LEAD Centrally</h1>
          <p>
          Save time and get more done
          Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
          </p>
          <button className='bg-black text-[#48d6dd] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default About
