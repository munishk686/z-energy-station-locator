import backgroundImage from "../../assets/Rectangle50.png";
import findNearestZ from "../../assets/Find the nearest Z.png";
// Change this filename to the actual Z sign asset filename
import zSign from "../../assets/download1.png";
import "./FindZSection.css";

function FindZSection() {
  return (
    <section
      className="find-z"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="find-z-content">
        <h2>There where you need us</h2>

        <button
          type="button"
          className="find-z-button"
          onClick={() => {
            console.log("Find the nearby Z clicked");
          }}
        >
          <img src={findNearestZ} alt="Find the nearby Z" />
        </button>
      </div>

      <img
        className="find-z-sign"
        src={zSign}
        alt=""
      />
    </section>
  );
}

export default FindZSection;