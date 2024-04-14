import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../components/Home";
import Signup from "../components/Signup";
import Products from "../components/Products";
import Features from "../components/Features";
import Timetracking from "../components/Timetracking";
import Price from "../components/Price";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login";
import Landing from "../components/landing";



function Router() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Signup' element={<Signup/>}   />
          <Route path='/Login' element={<Login/>}   />
          <Route path='/Products' element={<Products/>}   />
          <Route path='/Features' element={<Features/>}   />
          <Route path='/Timetracking' element={<Timetracking/>}   />
          <Route path='/Price' element={<Price/>}   />
          <Route path='/Navbar' element={<Navbar/>}   />
          
          <Route path="/landing" element={<Landing/>} />

          

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Router;

