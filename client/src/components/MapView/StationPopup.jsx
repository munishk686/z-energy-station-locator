import './StationPopup.css';
import directionIcon from '../../assets/direction.png';
import cssIcon from '../../assets/CCS.png'
import chadeIcon from '../../assets/CHAdeMO.png'

function StationPopup({ station, onClose }) {
  return (
    <>
    <div className="popup">
      <div className='marginLeft'>
        <div className='closeMiddle'>
          <br></br><br></br>
      <div className='close' onClick={onClose}></div>
      </div>
      <br></br>
      <h2 className='stationName'>{station.name}</h2>
      <br></br>
      <div style={{display: "flex", gap: "5px"}}>
       <p className='howFar'>5 km away |</p>
       <br></br>
        <p className='openClosed'>Open</p>
        </div>
      <p className='stationAddress'>{station.address}</p>
        <br></br>

<a href={`https://www.google.com/maps?q=${station.latitude},${station.longitude}`}>
       <img className='googleDirection' src={directionIcon} alt="direction" />
</a>
<br></br><br></br>
      <h5 className='services1'>Services</h5>
      <br></br>
      <p className='stationServices'>{station.services.join(' · ')}</p>
      <br></br>
      <h5 className='evCharging'>EV Charging</h5>
      <br></br>
      {station.ev_chargers && station.ev_chargers.length > 0 ? (
       station.ev_chargers.map((ev_chargers, index) => (
        <div key={index}>
        <div className='evCardOut'>
          <div className='evCardTop'>
            <div className='half'>
            <img className='evIcon' src={ev_chargers.type === 'CCS' ? cssIcon : chadeIcon} alt={ev_chargers.type} />
            <div className='evType'>{ev_chargers.type}</div></div><div className='kwmax'>{ev_chargers.max_kw} kW max</div>
          </div>
          <h5 className='space'>${station.prices.EV_Charging}/kWh</h5>
          <h5 className='space'>{ev_chargers.total} of {ev_chargers.total} avaliable</h5>
        </div>
        <br></br>
        </div> ))
       ) : (
<p className='stationServices'>None</p> 
       )
       
      }
      
    </div>
    </div>
    </>
  );
  
}

export default StationPopup;