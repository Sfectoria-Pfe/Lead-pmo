import React from 'react';
import Logo from '../assets/pmologo.png';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div className="flex items-center">
        <img className="h-10 w-auto mr-4" src={Logo} alt="Logo" />
        <div>
          <h1 className='text-3xl font-bold text-white cursor-pointer' onClick={() => window.scrollTo(0, 0)}>Lead</h1>
          <p className='py-4'>Align tasks with company goals for maximum impact for maximum impact.</p>
          <div className='flex justify-between md:w-[75%]'>
            <a href="https://www.facebook.com"> <FaFacebookSquare size={30} />   </a>
            <a href="https://www.instagram.com"> <FaInstagram size={30} />   </a>
            <a href="https://www.twitter.com"> <FaTwitterSquare size={30} />  </a>
            <a href="https://www.fagithub.com">   <FaGithubSquare size={30} /></a>
          </div>
        </div>
      </div>
      <div className='lg:col-span-2'>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
