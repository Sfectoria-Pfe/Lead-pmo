import React, { useRef, useState } from 'react';
import Logo from '../../assets/pmologo.png'; 

const Signup = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);

  return (
    <>
      <div className="flex justify-between items-center">
        <a href="/" className="-m-1.5 p-1.5 flex items-center">
          <span className="sr-only">Your Company</span>
          <img className="h-14 w-auto ml-18" src={Logo} alt="Logo"/>
          <p className="text-white font-bold text-lg ml-2">Lead</p>
        </a>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mr-20" onClick={() => setOpenModal(true)}>Sign Up</button>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h3 className="text-xl font-medium text-gray-900">Sign up for our platform</h3>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Your email</label>
              <input id="email" ref={emailInputRef} type="email" placeholder="name@company.com" className="w-full border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Choose a password</label>
              <input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">Confirm password</label>
              <input id="confirmPassword" type="password" placeholder="Confirm Password" className="w-full border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Already have an account?</span>
              <a href="/login" className="text-blue-500 hover:underline">Log In</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
