
//import { useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import FindStation from './findstation/findstation.jsx'
import './App.css'
//import MapView from '../Components/MapView';
import Home from "./pages/Home/Home";

function App() {
  
// i did 2 maps so i could see on the desktop how its ment to look.
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/locations" element={
      <>
      <FindStation />

      </>
    } />
    </Routes>
    </BrowserRouter>
  );

}
export default App;