import "./stationcard.css";
import { useState } from "react";

function StationCard({ station, selectedFilters }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="station-card"
         onClick={() => setExpanded(!expanded)}>

      <h2>{station.name}</h2>

      <p>{station.distance} km away</p>

      <p>{station.address}</p>

      {!expanded && (
      <p>
        {station.open24Hours
          ? "Open 24 hours"
          : "Not open 24 hours"}
      </p>
      )}
          {expanded && (
      <div className="station-expanded">
        <a
          className="direction-button"
           href={`https://www.google.com/maps/dir/?api=1&destination=${station.latitude},${station.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            <span>Get Direction</span>
            <span className="direction-arrow">↗</span>
        </a>

        <h3>Services</h3>
        <p className="station-services">
          {station.open24hours && (
            <span className={selectedFilters.includes("24hours") ? "services-highlight" : ""
            }>
              • Open 24 hours
            </span>
          )}
           {station.services?.map((service, index) => {
              const filterName =
                service === "Restroom" ? "Restrooms" : service;
              const isSelected =
                selectedFilters.includes(filterName);
              return (
                <span
                  key={index}
                  className={
                    isSelected ? "service-highlight" : ""
                  }
                >
                  {" · "}{service}
                </span>
              );
            })}
            {!station.open24Hours &&
              !station.services?.length &&
              "No services listed"}
        </p>
      </div>
          )}
    </div>
  );
}

export default StationCard;