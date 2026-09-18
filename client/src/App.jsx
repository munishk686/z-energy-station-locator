import FindStation from './findstation/findstation.jsx'
import './App.css'
import MapView from '../Components/MapView';

function App() {
  

  return (
    <>
      <FindStation />
          <div className='map' id="map">
            <div className='map50'><MapView/></div>
      <div className='map50'><MapView/></div>
    </div>
    </>
  );

}
export default App;