//import { useState } from 'react'
import FindStation from './findstation/findstation.jsx'
import './App.css'
import MapView from '../Components/MapView';
import Home from "./pages/Home/Home";

function App() {
  

  return (
    <>
    <Home />
      <FindStation />
          <div id="map">
      <MapView />
    </div>
    </>
  );

}
export default App;