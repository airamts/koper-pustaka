import { useState, useCallback, useRef } from "react";
import Figure from 'react-bootstrap/Figure';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../constants";

function SectionFist({onMarkerPositionChange}) {
  const [markerPosition, setMarkerPosition] = useState({ lat: -6.200000, lng: 106.816666 }); 

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMapClick = useCallback(async (event) => {
    const newMarkerPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setMarkerPosition(newMarkerPosition);
    onMarkerPositionChange(newMarkerPosition);
  }, [onMarkerPositionChange]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <Figure>
        <p className='fw-bolder mb-1'>Tentukan titik pinpoin lokasi kamu!</p>
        <div style={{ marginTop: "20px" }}>
          <GoogleMap
            mapContainerStyle={{
              height: "400px",
              width: "630px"
            }}
            center={markerPosition}
            zoom={13}
            onLoad={onMapLoad}
            onClick={handleMapClick}
          >
            <MarkerF
              position={markerPosition}
              icon={""}
            />
          </GoogleMap>
        </div>
      </Figure>
    </div>
  );
}

export default SectionFist;
