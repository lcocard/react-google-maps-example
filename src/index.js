import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHjnP128e_i3I49l_Sq9izuR0T96nazn8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 43.7184034, lng: -79.5184845 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 43.696526, lng: -79.286201 }} />
    )}
        {props.isMarkerShown && (
      <Marker position={{ lat: 43.696526, lng: -79.286201 }} />
    )}
{props.isMarkerShown && (
      <Marker position={{ lat: 43.725113, lng: -79.285385 }} />
    )}
    {props.isMarkerShown && (
      <Marker position={{ lat: 43.725113, lng: -79.285385 }} />
    )}
    {props.isMarkerShown && (
          <Marker position={{ lat: 43.680157, lng: -79.337433 }} />
    )}
    {props.isMarkerShown && (
          <Marker position={{ lat: 43.680157, lng: -79.337433 }} />
    )}
    {props.isMarkerShown && (
          <Marker position={{ lat: 43.680157, lng: -79.337433 }} />
    )}

  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
