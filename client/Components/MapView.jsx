import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import { MapIcon } from "./MapIcon";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

function MapView() {
  const position = [-41.2865, 174.7762];
  const zoom = 10;
  const scrollWheelZoom = true;
  const [stations, setStations] = useState([]);

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
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      style={{ height: "100vh", width: "100vw" }}
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
          icon={MapIcon(station.prices.ZX_Premium)}
        >
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
