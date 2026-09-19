import "./ServicesSection.css";
import trailerHireImage from "../../assets/Group159.png";
import z2oCarWashImage from "../../assets/Group160.png";
import lpgSwapImage from "../../assets/Group12.png";
import foodAndDrinkImage from "../../assets/Food.png";

function ServicesSection() {
 const services = [
  {
    name: "Trailer Hire",
    image: trailerHireImage,
  },
  {
    name: "Z2O Car Wash",
    image: z2oCarWashImage,
  },
  {
    name: "LPG SWAP’n’GO",
    image: lpgSwapImage,
  },
  {
    name: "Food & Drink",
    image: foodAndDrinkImage,
  },
];

  return (
    <section className="services">
      <div className="services-content">
        <h2>What you need, made easy</h2>

        <p>
          Moving furniture? Hangry for a pie and barista made coffee? Have a
          dirty car that needs some love? Come on in - we’ve got you covered.
        </p>

        <button type="button" className="station-button">
          <span>At the station</span>
          <span className="station-arrow">→</span>
        </button>
      </div>

      <div className="services-list">
  {services.map((service) => (
    <button type="button" className="service-card" key={service.name}>
      <div className="service-info">
        {service.image && (
          <img
            src={service.image}
            alt=""
            className="service-image"
          />
        )}

        <span className="service-name">{service.name}</span>
      </div>

      <span className="service-arrow">→</span>
    </button>
  ))}
</div>
    </section>
  );
}

export default ServicesSection;