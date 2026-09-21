import logo from "../../assets/Z_Energy_logo.png";
import "./FuelStationModal.css";
import { useState } from "react";

function FuelStationModal({ onSave }) {
  const [fuel, setFuel] = useState("fuel");
  const [station, setStation] = useState("station");

  return (
    <div className="fuel-station-overlay">
      <div className="fuel-station-modal">
        <button
  type="button"
  className="fuel-station-skip"
  onClick={() =>
    onSave({
      fuel: "Z91 Unleaded",
      station: "All Stations",
    })
  }
>
  Skip
</button>
        <img
          src={logo}
          alt="Z Energy"
          className="fuel-station-logo"
        />

        <h2>
          Welcome to
          <br />
          Z Energy Station Locator
        </h2>

        <div className="fuel-station-fields">
          <select
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          >
            <option value="fuel" disabled>
              Fuel
            </option>
            <option value="Zx Premium">Zx Premium</option>
            <option value="Z91 Unleaded">Z91 Unleaded</option>
            <option value="Z Diesel">Z Diesel</option>
            <option value="EV Charging">EV Charging</option>
          </select>

          <select
            value={station}
            onChange={(e) => setStation(e.target.value)}
          >
            <option value="station" disabled>
              Station
            </option>
            <option value="Service Station">Service Station</option>
            <option value="Truck Stop">Truck Stop</option>
            <option value="EV Charging">EV Charging</option>
          </select>
        </div>

        <p className="fuel-station-description">
          Set your preferred fuel and station type
          <br />
          for more refined results.
        </p>

        <p className="fuel-station-note">
          If you skip, we'll show Z91 by default.
        </p>

        <button
          type="button"
          className="fuel-station-save"
          onClick={() => onSave({ fuel, station })}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default FuelStationModal;