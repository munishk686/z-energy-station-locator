import heroImage from "../../assets/ZEnergy_HR.jpg";
import findNearestZ from "../../assets/Find the nearest Z.png";
import cardBackground from "../../assets/Rectangle47.png";
import "./HeroSection.css";

function HeroSection() {
  return (
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
          onClick={() => {
            console.log("Find the nearest Z clicked");
          }}
        >
          <img src={findNearestZ} alt="Find the nearest Z" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;