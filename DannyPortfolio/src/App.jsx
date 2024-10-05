import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Hero'
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar'

import './App.css'

function App() {


  return (
    <div style={{ height: '100vh' }}>
      
      <BrowserRouter>
      <Navbar/>
      

      <Routes>
      <Route path="/" element= {<LandingPage/>} />

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
