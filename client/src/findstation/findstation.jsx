import SearchBanner from "../jackscomp/searchbanner.jsx";
import StationCard from "../jackscomp/stationcard.jsx";
import { useState, useEffect } from "react";
import MapView from "../../Components/MapView";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./findstation.css";

function FindStation() {
 const [results, setResults] = useState([]);
 const [selectedFilters, setSelectedFilters] = useState([]);
 const [hasSearched, setHasSearched] = useState(false);
 const [userLocation, setUserLocation] = useState(null);
 const [locationError, setLocationError] = useState("");

useEffect(() => {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLocationError("");
    },
    () => {
      setLocationError(
        "Location access unavailable. You can still search manually."
      );
    }
  );
}, []);

return (
  <>
    <Header />

    <main>
      <SearchBanner
       userLocation={userLocation}
        onResults={(stations) => {
          setResults(stations);
          setHasSearched(true);
        }}
        onApplyFilters={setSelectedFilters}
      />

      {locationError && (
      <p className="location-error">{locationError}</p>
      )}

      {hasSearched && (
        <div className="station-layout">
          <div className="station-results">
            <p className="results-count">
              {results.length} Stations Found
            </p>

            {results.map((station) => (
              <StationCard
                key={station._id}
                station={station}
                selectedFilters={selectedFilters}
              />
            ))}
          </div>

          <div className="station-map" id="map">
            <MapView />
          </div>
        </div>
      )}
    </main>

    <Footer />
  </>
);
}

export default FindStation;