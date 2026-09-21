import "leaflet/dist/leaflet.css";
import { MapIcon } from "./MapIcon";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import StationPopup from "./StationPopup";
import pos from "../../assets/pos.png";
import X from "../../assets/X.png";
import Xpand1 from "../../assets/Xpand.png";
import listShow from "../../assets/veiwlist.png";
import zBlue from "../../assets/zBlue.png";
import goto from "../../assets/goto.png";
import mapsym from "../../assets/mapicon.png";
import searchie from "../../assets/search.png";
import Back from "../../assets/back.png"
import "./MapView.css";


// Haversine formula to culculate the km
function getKm([lat1, lon1], [lat2, lon2]) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function LocateButton() {
  const map = useMap();

  function handleClick() {
    navigator.geolocation.getCurrentPosition((pos) => {
      map.setView([pos.coords.latitude, pos.coords.longitude], 14);
    });
  }

  return (
    <img
      className="posbutton"
      src={pos}
      alt="locate me"
      onClick={handleClick}
    />
  );
}
// lil diffrent was haveing issues wanted it the same but since its outside the mapcontainer.
function ListsShow({  stations, userLocation, setClickedStations }) {
  const [sList, setSList] = useState(false);
  const position = [-36.8485, 174.7633];
  const zoom = 10;
  const scrollWheelZoom = true;
  return (
    <>
      <img
        className="lShow"
        src={listShow}
        onClick={() => setSList(!sList)}
      ></img>
      {sList && (
        <div className="showList">
          <div className="noTimeMiniMap">
            <MapContainer
              center={userLocation || position}
              zoom={zoom}
              scrollWheelZoom={scrollWheelZoom}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {stations.map((station) => (
                <Marker
                  key={station._id}
                  position={[station.latitude, station.longitude]}
                  icon={MapIcon(station.prices.Z91_Unleaded)}
                />
              ))}
              <Search stations={stations} userLocation={userLocation} onStationClick={setClickedStations} />
              <LocateButton />
            </MapContainer>
            <img
              className="lNoShow"
              src={mapsym}
              onClick={() => setSList(!sList)}
            />
          </div>
          <div className="slist50">
            {stations.map((s) => (
              <div key={s._id} className="slistin">
                <div className="flex">
                  <img src={zBlue} alt="zBlue" />
                  <h5>{s.name}</h5>
                </div>
                {/* hard codded for now */}
                <div className="flex">
                  <h5>{s.fuelTypes[0]}</h5>
                  <h5>{s.prices.Z91_Unleaded}</h5>
                </div>
                <h5>
                  {getKm(userLocation, [s.latitude, s.longitude]).toFixed(1)}km
                </h5>
                <div className="flex3">
                  <a
                    href={`https://www.google.com/maps?q=${s.latitude},${s.longitude}`}
                  >
                    <img src={goto} alt="google direction" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Search({ stations, userLocation, onStationClick }) {
  const [search1, setSearch1] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = query
    ? stations.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  function searchieBtn() {
    setSearch1(true);
  }
  function searchieCloseBtn() {
    setSearch1(false);
  }

  return (
    <>
      <img
        className="searchie"
        src={searchie}
        alt="search icon"
        onClick={() => {
          searchieBtn();
        }}
      />

      {search1 && (
        <div className="searchiePop">
          <div className="bannerr">
            <img src={Back} className="backk" onClick={searchieCloseBtn}></img>
            <input
              className="findStation"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {filtered.map((s) => (
            <div key={s._id}>
              <div className="flex1">
                <img src={zBlue} alt="zBlue" />
                <div className="flex2">
                  <div className="font">{s.name}</div>
                  <div className="flex4">
                    <h5 className="font1">Open Now |</h5>
                    <h5 className="font1">
                      {getKm(userLocation, [s.latitude, s.longitude]).toFixed(
                        1,
                      )}{" "}
                      km away
                    </h5>
                  </div>
                </div>
                <div></div>
                <div className="flex5">
                  <h5 onClick={() => { console.log("clicked", s); onStationClick(s); }} className="gap">{">"}</h5>
                </div>
              </div>
            </div>
          ))}

          <div className="sBackground"></div>
        </div>
      )}
    </>
  );
}

// desktop under

function Expand() {
  const [Xpand, setXpand] = useState(false);

  function XpandBtn() {
    setXpand(true);
  }
  function XpandClose() {
    setXpand(false);
  }

  return (
    <>
      <img className="Xpand" src={Xpand1} alt="Expand Map" onClick={XpandBtn} />

      {Xpand && (
        <div className="overlay">
          <MapView />
          <img
            className="XpandClose"
            src={X}
            alt="X Buttton"
            onClick={XpandClose}
          />
        </div>
      )}
    </>
  );
}

function MapZoom() {
  const map = useMap();

  function handleZoomIn() {
    map.zoomIn();
  }
  function handleZoomOut() {
    map.zoomOut();
  }

  return (
    <div className="zoomWrapper">
      <div className="zoomInBtn" onClick={handleZoomIn}>
        <h2>+</h2>
      </div>
      <div className="zoomOutBtn" onClick={handleZoomOut}>
        <h2>-</h2>
      </div>
    </div>
  );
}

function MapView() {
  const position = [-36.8485, 174.7633];
  const zoom = 10;
  const scrollWheelZoom = true;
  const [stations, setStations] = useState([]);
  const [clickedStations, setClickedStations] = useState("");
  const [userLocation, setUserLocation] = useState("");

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
      <div>
        {userLocation && (
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
              <MapZoom />
              <LocateButton />
            </MapContainer>
            <Search stations={stations} userLocation={userLocation} onStationClick={setClickedStations}/>
            <ListsShow stations={stations} userLocation={userLocation} />
            <Expand />
            {clickedStations && (
              <StationPopup
                station={clickedStations}
                onClose={() => setClickedStations("")}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MapView;
