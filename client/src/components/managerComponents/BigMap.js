import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";


function Map(props) {

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: props.area.lat, lng: props.area.lng }}
    >

      <Marker 
      position={{ lat: props.area.lat, lng: props.area.lng}}
      />
      
    </GoogleMap>
  );
}

const BigMap = withScriptjs(withGoogleMap(Map));

export default BigMap;