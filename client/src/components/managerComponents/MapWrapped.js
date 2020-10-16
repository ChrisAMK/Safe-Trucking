import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";


function Map(props) {


  console.log(props)
  

  // (props.area === undefined) ? { lat: -32.221512, lng: 116.008072 } : { lat: props.area.lat, lng: props.area.long }
  // defaultCenter={(props.area === undefined) ? { lat: -32.221512, lng: 116.008072 } : { lat: props.area.lat, lng: props.area.long }}

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

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default MapWrapped;