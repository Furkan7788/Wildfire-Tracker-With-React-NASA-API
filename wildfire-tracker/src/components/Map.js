import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Map({ center, zoom, eventData }) {
  const position = [51.505, -0.09]
  return (
    <div className="map" id="map">
      {console.log(eventData)}
      <MapContainer center={position} zoom={13}>
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" />
        {eventData.map((data) => {
          <Marker position={position}>
            {/* <LocationMarker
              lat={data.geometries[0].coordinates[0]}
              lng={data.geometries[0].coordinates[1]}
            ></LocationMarker> */}
          </Marker>;
        })}
      </MapContainer>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};
