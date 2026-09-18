import "./searchbanner.css";
import { useState } from "react";
import stations from "../dummydata/station.js";
import MoreFilters from "./morefilters.jsx";

function SearchBanner({ onResults }) {
  
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    const filteredStations = stations.filter((station) =>
      station.name.toLowerCase().includes(search.toLowerCase())
    );
    onResults(filteredStations);  
  }

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
        <button className="search-button"
        onClick={handleSearch}>

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

      {showFilters && <MoreFilters />}
</section>
</div>
   
  );
}

export default SearchBanner;