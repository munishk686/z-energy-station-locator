import SearchBanner from "../jackscomp/searchbanner.jsx";
import StationCard from "../jackscomp/stationcard.jsx";
import { useState } from "react";

function FindStation() {
 const [results, setResults] = useState([]);

  return (
    <>
      <SearchBanner onResults={setResults} />

      <div className="station-results">
        <p>{results.length} Stations Found</p>

        {results.map((station) =>
        <StationCard
        key={station.id}
        station={station} />
        )}
      </div>
    </>
  );
}

export default FindStation;