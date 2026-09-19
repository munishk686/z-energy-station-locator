import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

export function MapIcon(prices) {
  const mapIcon = divIcon({
    className: "custom-icon",
    html: `<div class="Container" 
    style="
position: relative;">
<div class="Oval"
style="
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 5px;
gap: 10px;width: 55px;
height: 25px;
background: rgba(255, 255, 255, 0.5);
border: 2px solid #1E196A;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 17.5px;
">
 <span class="Price"
 style="
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
text-align: center;
letter-spacing: -0.023em;
color: #F26522;
 ">
 ${prices}
 </span>
</div>
<div class="Pin Line"
 style="
 position: absolute;
 bottom: -12px;
 left: 50%;
 margin-left: -10px;
width: 20px;
height: 0px;
border: 2px solid #1E196A;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
transform: rotate(-90deg);
">
</div>
<div class="Pin Point"
style="
position: absolute;
 height: 8px;
  width: 8px;
  background-color: #1E196A;
  border: 2px solid #1E196A;
  border-radius: 50%;
   bottom: -23px;
 left: 50%;
 margin-left: -4px;
"> 
</div>
 </div>`,
    iconSize: [55, 48],
    iconAnchor: [20, 45]
  });

  return mapIcon;
}
