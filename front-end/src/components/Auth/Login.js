import React, { useRef, useState } from 'react';
import Logo from '../../assets/pmologo.png'; 

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);

  return (
    <>
      <div className="flex justify-between items-center">

             <a href="/" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">Your Company</span>
                <img className="h-14 w-auto ml-18" src={Logo} alt="Logo"/>
                <p className="text-white font-bold text-lg ml-2">Lead</p> {/* Moved paragraph to the right of the logo */}
              </a>
      

 
        <button className="bg-black text-white hover:bg-gray-900 font-bold py-2 px-6 rounded mr-20" onClick={() => setOpenModal(true)}>Login</button>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <div className="bg-black text-white p-8 rounded shadow-md w-96">
            <h3 className="text-xl font-medium">Sign in to our platform</h3>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-200">Your email</label>
              <input id="email" ref={emailInputRef} type="email" placeholder="name@company.com" className="w-full border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-200">Your password</label>
              <input id="password" type="password" placeholder="Password" className="w-full border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                <label htmlFor="remember" className="ml-2 text-gray-200">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-300 hover:underline">Lost Password?</a>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Log in to your account</button>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-200">
              <span>Not registered?</span>
              <a href="/Signup" className="text-blue-300 hover:underline">Create account</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
