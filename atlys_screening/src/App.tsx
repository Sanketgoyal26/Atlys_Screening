import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './Components/Auth';
import Home from './Components/Home';

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Auth />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
