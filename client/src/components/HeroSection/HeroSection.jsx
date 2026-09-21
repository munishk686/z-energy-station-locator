import heroImage from "../../assets/ZEnergy_HR.jpg";
import findNearestZ from "../../assets/Find the nearest Z.png";
import cardBackground from "../../assets/Rectangle47.png";
import "./HeroSection.css";
import { useState } from "react";
import FuelStationModal from "../FuelStationModal/FuelStationModal";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [showFuelStationModal, setShowFuelStationModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="hero-card"
          style={{ backgroundImage: `url(${cardBackground})` }}
        >
          <h1 className="hero-title desktop-title">
            Z is for New Zealand
          </h1>

          <h1 className="hero-title mobile-title">
            There where you need us
          </h1>

          <p>Powering better journeys, today</p>
          <p>and tomorrow</p>

          <button
            type="button"
            className="find-nearest-button"
            onClick={() => setShowFuelStationModal(true)}
          >
            <img src={findNearestZ} alt="Find the nearest Z" />
          </button>
        </div>
      </section>
      {showFuelStationModal && (
        <FuelStationModal
          onSave={({ fuel, station }) => {
            if (fuel === "fuel" || station === "station") {
              alert("Please select both fuel and station.");
              return;
            }

            console.log("Selected fuel:", fuel);
            console.log("Selected station:", station);

            setShowFuelStationModal(false);
            navigate(
              `/locations?fuel=${encodeURIComponent(fuel)}&station=${encodeURIComponent(station)}`
            );
          }}
        />
      )}
    </>
  );
}

export default HeroSection;