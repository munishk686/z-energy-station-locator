import SearchBanner from "../jackscomp/searchbanner.jsx";
import StationCard from "../jackscomp/stationcard.jsx";
import { useState } from "react";

function FindStation() {
 const [results, setResults] = useState([]);
 const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <>
      <SearchBanner onResults={setResults} 
      onApplyFilters={setSelectedFilters}
      />

      <div className="station-results">
        <p>{results.length} Stations Found</p>

        {results.map((station) =>
        <StationCard
        key={station._id}
        station={station} 
        selectedFilters={selectedFilters}
        />
        )}
      </div>
    </>
  );
}

export default FindStation;