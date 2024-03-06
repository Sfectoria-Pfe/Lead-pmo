import React, { useState } from 'react';
import Logo from '../assets/pmologo.png';
import { Link } from 'react-router-dom';

const Header= () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div style={{position:"fixed", backgroundColor:"black", width:"100%"}}>
        <header className="fixed inset-x-0 top-0 z-50 bg-black-800">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1 items-center">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src={Logo} alt="Logo"/>
                <p className="text-white font-bold text-lg ml-2  ">Lead</p> {/* Moved paragraph to the right of the logo */}
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/Product" className="text-sm font-semibold leading-6 text-white">Product</Link>
              <Link to="/Features" className="text-sm font-semibold leading-6 text-white">Features</Link>
              <Link to="/Marketplace" className="text-sm font-semibold leading-6 text-white">Marketplace</Link>
              <Link to="/Company" className="text-sm font-semibold leading-6 text-white">Company</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/login" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></Link>
              
            </div>
          </nav>
        </header>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50" onClick={() => setMenuOpen(false)}></div>
      )}
      {/* Mobile menu, show/hide based on menu open state. */}
      {menuOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={Logo} alt=""/>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50">Product</Link>
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50">Features</Link>
                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50">Marketplace</Link>
                <Link to="/Company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50">Company</Link>
              </div>
              <div className="py-6">
                <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
