import SearchBanner from "../jackscomp/searchbanner.jsx";
import StationCard from "../jackscomp/stationcard.jsx";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocationPopup from "../jackscomp/locationpopup.jsx";
import "./findstation.css";
import MapView from "../components/MapView/MapView.jsx";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const earthRadius = 6371;

  const latitudeDifference = toRadians(lat2 - lat1);
  const longitudeDifference = toRadians(lon2 - lon1);

  const a =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(longitudeDifference / 2) ** 2;

  return earthRadius * 2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  );
}

function FindStation() {
 const [showMobileSearch, setShowMobileSearch] = useState(false);
 const [results, setResults] = useState([]);
 const [selectedFilters, setSelectedFilters] = useState([]);
 const [distanceLimit, setDistanceLimit] = useState("none");
 const [hasSearched, setHasSearched] = useState(false);
 const [userLocation, setUserLocation] = useState(null);
 const [locationError, setLocationError] = useState("");
 const [showLocationPopup, setShowLocationPopup] = useState(true);

 const matchesFilter = (station, filter) => {
  const services = (station.services || []).map((service) =>
    service.toLowerCase()
  );

  switch (filter) {
    case "24 Hours":
    case "24Hours":
      return station.open24Hours === true;

    case "Car Wash":
    case "Z20 carwash":
      return services.includes("car wash") ||
         services.includes("z20 carwash");

    case "Trailer Hire":
      return (
        station.trailerHire === true ||
        services.includes("trailer hire")
      );

    case "Coffee":
      return services.some((service) =>
        ["coffee & food", "z express coffee & fresh food", "pre-order coffee"]
          .includes(service)
      );

    case "Food":
      return services.some((service) =>
        ["coffee & food", "z express coffee & fresh food"].includes(service)
      );

    case "EV Station":
      return (
       station.station_type?.toLowerCase() === "ev charging" ||
       station.fuelTypes?.some(
      (fuel) => fuel.toLowerCase() === "ev charging") ||
       services.includes("ev charging"));

    case "Restrooms":
      return services.includes("restroom") ||
      services.includes("restrooms");
    
    case "Nearest":
    case "Lowest Price":
      return true;

    default:
      return services.includes(filter.trim().toLowerCase());
  }
};

const filteredResults = results
  .map((station) => {
    if (
      !userLocation ||
      station.latitude == null ||
      station.longitude == null
    ) {
      return { ...station, distance: null };
    }

    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      Number(station.latitude),
      Number(station.longitude)
    );

    return {
      ...station,
      distance: Number(distance.toFixed(1)),};
  })
    .filter((station) => {
    const matchesServices = selectedFilters.every((filter) =>
      matchesFilter(station, filter));

    const matchesDistance =
      distanceLimit === "none" ||
      (station.distance !== null &&
        station.distance < Number(distanceLimit));

    return matchesServices && matchesDistance;
})
.sort((a, b) => {
  if (selectedFilters.includes("Nearest")) {
    return (a.distance ?? Infinity) - (b.distance ?? Infinity);
  }

  return 0;
});

const requestLocation = () => {
  setShowLocationPopup(false);

  if (!navigator.geolocation) {
    setLocationError("Your browser does not support location access.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      setLocationError("");
    },
    (error) => {
      console.error("Location error:", error);
      setLocationError(
        "Unable to get your location. You can still search manually."
      );
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    }
  );
};

return (
  <>
    <Header onSearchClick={() => setShowMobileSearch((previous) => !previous)} />
      {showLocationPopup && (
      <LocationPopup
        onAllow={requestLocation}
        onDeny={() => setShowLocationPopup(false)}/>
    )}

    <main>
      <SearchBanner
       userLocation={userLocation}
        showMobileSearch={showMobileSearch}
        onResults={(stations) => {
          setResults(stations);
          setHasSearched(true);
        }}
        onApplyFilters={(selection) => {
        if (Array.isArray(selection)) {
        setSelectedFilters(selection);
        } else {
        setSelectedFilters(selection.filters);
        setDistanceLimit(selection.distance);}}}
      />

      {locationError && (
      <p className="location-error">{locationError}</p>
      )}

      {hasSearched && (
        <div className="station-layout">
          <div className="station-results">
            <p className="results-count">
              {filteredResults.length} Stations Found
            </p>

            {filteredResults.map((station) => (
              <StationCard
                key={station._id}
                station={station}
                selectedFilters={selectedFilters}
              />
            ))}
          </div>

          <div className="station-map" id="map">
            <MapView/>
          </div>
        </div>
      )}
    </main>
    <Footer />
  </>
);
}

export default FindStation;