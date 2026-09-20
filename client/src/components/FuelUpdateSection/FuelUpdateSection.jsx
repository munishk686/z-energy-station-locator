import fuelImage from "../../assets/Z-Energy-Extras.png";
import "./FuelUpdateSection.css";

function FuelUpdateSection() {
  return (
    <section className="fuel-update">
      <div className="fuel-update-image">
        <img src={fuelImage} alt="Z Energy station" />
      </div>

      <div className="fuel-update-content">
        <h2>Z Energy update on</h2>
        <h2>fuel supply</h2>


        <button type="button" className="read-more-button">
          <span>Read More</span>
          <span className="read-more-arrow">↗</span>
        </button>      </div>
    </section>
  );
}

export default FuelUpdateSection;