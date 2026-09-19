//import { useState } from 'react'
import FindStation from './findstation/findstation.jsx'
import './App.css'
import MapView from '../Components/MapView';

function App() {
  

  return (
    <>
      <FindStation />
          <div id="map">
       <MapView />
    </div>
    </>
  );

}
export default App;

