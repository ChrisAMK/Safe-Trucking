import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap
} from "react-google-maps";


function Map() {

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    >
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default MapWrapped;