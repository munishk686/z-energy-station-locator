import "./stationcard.css";

function StationCard({ station }) {
  return (
    <div className="station-card">

      <h2>{station.name}</h2>

      <p>{station.distance} km away</p>

      <p>{station.address}</p>

      <p>
        {station.open24Hours
          ? "Open 24 hours"
          : "Not open 24 hours"}
      </p>

    </div>
  );
}

export default StationCard;