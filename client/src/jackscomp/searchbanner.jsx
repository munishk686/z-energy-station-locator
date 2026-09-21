import "./searchbanner.css";
import { useState } from "react";
//import stations from "../dummydata/station.js"; (testing search filter ONLY)
import MoreFilters from "./morefilters.jsx";

function SearchBanner({onResults, onApplyFilters, userLocation, showMobileSearch,}) {
  
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState([]);

  console.log("user location:", userLocation);

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

  const handleFilterClick = (filter) => {
  const updatedFilters = selectedButtons.includes(filter)
    ? selectedButtons.filter((item) => item !== filter)
    : [...selectedButtons, filter];

  setSelectedButtons(updatedFilters);
  onApplyFilters(updatedFilters);
};

  return (
    <div>
    <section className="search-banner">

      <h1>Find a Station</h1>

      <div className="mobile-filter-bar">
      <button
        type="button"
        className="mobile-back-button"
        onClick={() => window.history.back()}
        aria-label="Go back">
     ‹
    </button>

    <button
      type="button"
      className="mobile-more-filters"
      onClick={() => setShowFilters(!showFilters)}>
    ☷ Filters
  </button>
</div>

<div className={`search-row ${showMobileSearch ? "mobile-search-open" : ""}`}>
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
       {[
       "Lowest Price",
       "Nearest",
       "24 Hours",
       "Car Wash",
       "Trailer Hire",
       "Coffee",
       "Food",
       "EV Station",
      ].map((filter) => (
    <button
      key={filter}
      type="button"
      className={selectedButtons.includes(filter) ? "selected" : ""}
      aria-pressed={selectedButtons.includes(filter)}
      onClick={() => handleFilterClick(filter)}>
      {filter}
    </button>
  ))}

  <button
   type="button"
   className="desktop-more-filters"
   onClick={() => setShowFilters(!showFilters)}>
   More Filters
</button>
</div>

{showFilters && <MoreFilters onApplyFilters={onApplyFilters}/>}
</section>
</div>
   
  );
}

export default SearchBanner;