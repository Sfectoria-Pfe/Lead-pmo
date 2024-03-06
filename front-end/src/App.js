import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Login from './components/Auth/Login';
import Company from './components/Company';
import Landing from './components/Landing';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="Signup" element={< Signup/>} />
          <Route path="/Company" element={<Company/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




