import SearchBanner from "../jackscomp/searchbanner.jsx";
import StationCard from "../jackscomp/stationcard.jsx";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./findstation.css";
import MapView from "../components/MapView/MapView.jsx";

function FindStation() {
 const [results, setResults] = useState([]);
 const [selectedFilters, setSelectedFilters] = useState([]);
 const [hasSearched, setHasSearched] = useState(false);

return (
  <>
    <Header />

    <main>
      <SearchBanner
        onResults={(stations) => {
          setResults(stations);
          setHasSearched(true);
        }}
        onApplyFilters={setSelectedFilters}
      />

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
            <MapView/>
          </div>
        </div>
      )}
    </main>
    <MapView/>
    <Footer />
  </>
);
}

export default FindStation;