import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
// 23.294316184412942, 1349094
const center = {
  lat: 23.2943161,
  lng: 77.4044993,
};

const MapSection = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBg3zH3KMal8ApDRBnO72mkrPXp_OQqNUc">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={17}
      >
        <Marker position={center} onClick={() => setShowInfo(true)} />

        {showInfo && (
          <InfoWindow position={center} onCloseClick={() => setShowInfo(false)}>
            <div>
              <strong>A M Coaching Classes</strong>
              <p>Bhopal, Madhya Pradesh</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapSection;
