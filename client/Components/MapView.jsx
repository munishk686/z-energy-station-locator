import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import { MapIcon } from "./MapIcon";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import StationPopup from "./StationPopup";
import pos from "../Assets/pos.png";
import "./MapView.css";

function LocateButton() {
  const map = useMap();

  function handleClick() {
    navigator.geolocation.getCurrentPosition((pos) => {
      map.setView([pos.coords.latitude, pos.coords.longitude], 14);
    });
  }

  return (
    <img className="posbutton" src={pos} alt="locate me" onClick={handleClick} />
  );
}
function MapZoom() {
  const map = useMap();

  function handleZoomIn() {
 map.zoomIn()
  }
  function handleZoomOut() {
    map.zoomOut()
  }

  return (
  <div className="zoomWrapper">
    <div className="zoomInBtn" onClick={handleZoomIn}><h2>+</h2></div>
    <div className="zoomOutBtn" onClick={handleZoomOut}><h2>-</h2></div>
  </div>
  );
}


function MapView() {
  const position = [-36.8485, 174.7633];
  const zoom = 10;
  const scrollWheelZoom = true;
  const [stations, setStations] = useState([]);
  const [clickedStations, setClickedStations] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/stations")
      .then((response) => response.json())
      .then((data) => {
        setStations(data);
      })
      .catch((error) => {
        console.log("Error fetching stations:", error);
      });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => {
        console.log("Error fetching location:", error);
      },
    );
  }, []);

    return (
      <>
        <div className="mapContainer">
        <MapContainer
          center={userLocation || position}
          zoom={zoom}
          zoomControl={false}
          scrollWheelZoom={scrollWheelZoom}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {stations.map((station) => (
            <Marker
              key={station._id}
              position={[station.latitude, station.longitude]}
              // this is hardcodded for now it is takeing from only the ZX_Premium Price and not the other 2 why did i choose that one... IDK just happend.
              icon={MapIcon(station.prices.Z91_Unleaded)}
              eventHandlers={{
                click: () => {
                  console.log(clickedStations);
                  setClickedStations(station);
                },
              }}
            ></Marker>
          ))}
          <MapZoom/>
          <LocateButton/>
        </MapContainer>
        {clickedStations && (
          <StationPopup
            station={clickedStations}
            onClose={() => setClickedStations("")}
          />
        )}
        </div>
      </>
    );
  
}

export default MapView;
