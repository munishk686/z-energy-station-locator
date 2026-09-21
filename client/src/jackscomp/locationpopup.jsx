import "./locationpopup.css";

function LocationPopup({ onAllow, onDeny }) {
  return (
    <div className="location-overlay">
      <div className="location-popup">
        <h3>Use your location?</h3>

        <p>
          Allow Z to use your location to find nearby stations.
        </p>

        <div className="location-popup-buttons">
          <button onClick={onDeny}>Don't Allow</button>
          <button onClick={onAllow}>Allow</button>
        </div>
      </div>
    </div>
  );
}

export default LocationPopup;