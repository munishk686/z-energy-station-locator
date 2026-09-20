import "./searchbanner.css";
import { useState } from "react";
//import stations from "../dummydata/station.js"; (testing search filter ONLY)
import MoreFilters from "./morefilters.jsx";

function SearchBanner({ onResults, onApplyFilters }) {
  
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch (
        `http://localhost:5000/api/stations?search=${encodeURIComponent(search)}`
      );
      if (!response.ok) {
        throw new Error("failed to fetch stations");
      }
      const stations = await response.json();
      onResults(stations);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <section className="search-banner">

      <h1>Find a Station</h1>

      <div className="search-row">
        <input
         type="text"
         placeholder="Search for a station"
         value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="station-search-button"
        onClick={handleSearch}
        aria-label="Search Stations">
        →
        </button>
      </div>

      <div className="filter-buttons">
        <button>Lowest Price</button>
        <button>Nearest</button>
        <button>24 Hours</button>
        <button>Car Wash</button>
        <button>Trailer Hire</button>
        <button>Coffee</button>
        <button>Food</button>
        <button>EV Station</button>

        <button className="more-filters" 
                onClick={() => setShowFilters(!showFilters)}>
          More Filters
        </button>
      </div>

      {showFilters && <MoreFilters 
                       onApplyFilters={onApplyFilters}/>}
</section>
</div>
   
  );
}

export default SearchBanner;