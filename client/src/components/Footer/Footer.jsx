import logo from "../../assets/Z_Energy_logo.png";
import tiktok from "../../assets/tiktok.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import locationIcon from "../../assets/Vector.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <img className="footer-logo" src={logo} alt="Z Energy" />

        <div className="footer-column">
          <h3>At the station</h3>
          <a href="#">Food and drink</a>
          <a href="#">Payment options</a>
          <a href="#">Station services</a>
          <a href="#">EV charging</a>
          <a href="#">Fuel types, safety</a>
        </div>

        <div className="footer-column">
          <h3>Z App</h3>
          <a href="#">Pay with Z App</a>
          <a href="#">Sharetank</a>
          <a href="#">Pre-order food and drinks</a>
          <a href="#">Help using Z App</a>
          <a href="#">Z App terms and conditions</a>
        </div>

        <div className="footer-column">
          <h3>For businesses</h3>
          <a href="#">Z Business fuel card</a>
          <a href="#">Business charging solutions</a>
          <a href="#">Fuels and services</a>
          <a href="#">Business tips and stories</a>
        </div>

        <div className="footer-column">
          <h3>About Z</h3>
          <a href="#">Our story</a>
          <a href="#">Our people</a>
          <a href="#">What we stand for</a>
          <a href="#">Sustainability</a>
          <a href="#">Our commitment to Te Ao Māori</a>
          <a href="#">News</a>
          <a href="#">Careers at Z</a>
          <a href="#">Corporate centre</a>
        </div>

        <div className="footer-column">
          <h3>Rewards and promotions</h3>
          <a href="#">Z Rewards</a>
          <a href="#">Z Rewards Promotions</a>
          <a href="#">Fuelup</a>
          <a href="#">Club+</a>
          <a href="#">Help with Club+</a>
          <a href="#">Airpoints</a>
          <a href="#">Customer survey</a>
        </div>

        <div className="footer-contact">
          <button type="button" className="contact-z-button">
            <span>Contact Z</span>
            <span className="contact-z-icon">
              <img src={locationIcon} alt="" />
            </span>
          </button>

          <div className="social-icons">
            <img src={tiktok} alt="TikTok" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms of use</a>
          <a href="#">Fuel and Store Products Safety Data Sheets</a>
          <a href="#">Investor relations</a>
        </div>

        <p>© Z Energy Limited. All trademarks are used under licence.</p>
      </div>
    </footer>
  );
}

export default Footer;