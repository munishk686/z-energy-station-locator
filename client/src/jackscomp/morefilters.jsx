import "./morefilters.css";
import { useState } from "react";


function MoreFilters( {onApplyFilters} ) {

  const [ selectedChips, setSelectedChips ] = useState([]);
  const [ fuelType, setFuelType ] = useState("Z91 Unleaded");
  const [ stationType, setStationType ] = useState("Service Station");
  const [ distance, setDistance ] = useState("10");
  const [ saveFilter, setSaveFilter ] = useState(false);
  const [openSections, setOpenSections] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  
  const serviceGroups = {
  "Other Services": [
    "Restrooms",
    "Z2O carwash",
    "Trailer hire",
    "LPG SWAP'n'GO",
    "Super long hoses",
    "Fast fill Diesel lane",
    "AdBlue Diesel Exhaust Fluid",
  ],

  "Coffee & Food": [
    "Z Espress Coffee & Fresh Food",
    "Pre-order Coffee",
    "f'real",
    "Compostable Cups",
  ],

  Payment: [
    "Pay in app",
    "Pay by plate",
    "24/7 Pay at Pump",
    "Club+",
    "ATM",
  ],
};

  const chips = [
    "Lowest Price",
    "Restrooms",
    "EV Station",
    "Trailer Hire",
    "Coffee",
    "24Hours",
    "Food",
    "Car Wash",
    "Nearest"
  ];

  const handleChipClick = (chip) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips(
        selectedChips.filter((item) => item !== chip)
      );
    } else {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  const toggleSection = (section) => {
  setOpenSections((previous) =>
    previous.includes(section)
      ? previous.filter((item) => item !== section)
      : [...previous, section]
  );
};

const toggleService = (service) => {
  setSelectedServices((previous) =>
    previous.includes(service)
      ? previous.filter((item) => item !== service)
      : [...previous, service]
  );
};

  const handleClearAll = () => {
    setSelectedChips([]);
    setFuelType("");
    setStationType("");
    setDistance("none");
    setSaveFilter(false);
  };

  return (
    <div className="more-filters-panel">
      <div className="filter-section">
        <h3>Most Used</h3>
        <div className="filter-chips">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              className={
                selectedChips.includes(chip) ? "selected" : ""
              }
              aria-pressed={selectedChips.includes(chip)}
              onClick={() => handleChipClick(chip)}>
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-heading-row">
          <h3>Refine Your Search</h3>

          <label className="save-filter">
            <input
              type="checkbox"
              checked={saveFilter}
              onChange={(event) =>
                setSaveFilter(event.target.checked)
              }/>
            Save filter
          </label>
        </div>

        <div className="refine-options">
          <select
            value={fuelType}
            onChange={(event) => setFuelType(event.target.value)}>
            <option value="">Any fuel</option>
            <option value="Z91 Unleaded">Z91 Unleaded</option>
            <option value="Z95 Premium">Z95 Premium</option>
            <option value="Diesel">Diesel</option>
          </select>

          <select
            value={stationType}
            onChange={(event) =>
              setStationType(event.target.value)
            }>
            <option value="">Any station</option>
            <option value="Service Station">Service Station</option>
            <option value="EV Station">EV Station</option>
          </select>
        </div>
      </div>

      <div className="filter-section">
        <h3>Distance</h3>

        <input
          className="distance-slider"
          type="range"
          min="0"
          max="4"
          step="1"
          value={
            ["5", "10", "25", "50", "none"].indexOf(distance)
          }
          onChange={(event) => {
            const distances = ["5", "10", "25", "50", "none"];
            setDistance(distances[Number(event.target.value)]);
          }}/>

        <div className="distance-labels">
          <span>&lt; 5km</span>
          <span>&lt; 10km</span>
          <span>&lt; 25km</span>
          <span>&lt; 50km</span>
          <span>no limit</span>
        </div>
      </div>

      <div className="filter-section other-services">
  <h3>Other Services</h3>

  {Object.entries(serviceGroups).map(([group, services]) => (
    <div className="service-dropdown" key={group}>
      <div className="service-dropdown-header">
        <button
          type="button"
          className="service-dropdown-toggle"
          onClick={() => toggleSection(group)}
        >
          {group}
        </button>

        {openSections.includes(group) && (
          <button
            type="button"
            className="service-clear"
            onClick={() =>
              setSelectedServices((previous) =>
                previous.filter((service) => !services.includes(service))
              )
            }
          >
            Clear all
          </button>
        )}

        <button
          type="button"
          className="service-chevron"
          onClick={() => toggleSection(group)}
          aria-label={`Toggle ${group}`}
        >
          {openSections.includes(group) ? "⌃" : "⌄"}
        </button>
      </div>

      {openSections.includes(group) && (
        <div className="service-dropdown-options">
          {services.map((service) => (
            <label key={service} className="service-option">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
              />
              {service}
            </label>
          ))}
        </div>
        )}
      </div>
      ))}
     </div>

      <div className="filter-actions">
        <button
          type="button"
          className="clear-button"
          onClick={handleClearAll}>
          Clear All
        </button>

        <button
          type="button"
          className="apply-button"
          onClick={() =>
          onApplyFilters({
          filters: [...selectedChips, ...selectedServices],
          distance: distance,
          })}>
          Apply
        </button>
      </div>

    </div>
  );
}

export default MoreFilters;