import { useState } from "react";
import "./stationcard.css";

function StationCard({ station, selectedFilters = [] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`station-card ${expanded ? "expanded" : "collapsed"}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h2>{station.name}</h2>

      {station.distance != null && (
        <p className="station-distance">
          {station.distance} km away
        </p>
      )}
      <p className="station-address">{station.address}</p>
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
            {station.open24Hours && (
              <span
                className={
                  selectedFilters.includes("24Hours") ||
                  selectedFilters.includes("24 Hours")
                    ? "service-highlight"
                    : "" }>
                • Open 24 hours
              </span>
            )}

            {station.services?.map((service, index) => {
              const filterName =
                service === "Restroom" ? "Restrooms" : service;
              const isSelected = selectedFilters.includes(filterName);

              return (
                <span
                  key={index}
                  className={isSelected ? "service-highlight" : ""}
                >
                  {" · "}
                  {service}
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
