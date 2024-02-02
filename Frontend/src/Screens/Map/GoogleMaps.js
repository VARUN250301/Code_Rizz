import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    const { google, markers, initialCenter } = this.props;

    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={initialCenter}
        style={{
          width: "80vw" /* Adjust the width as needed */,
          height: "90vh" /* Adjust the height as needed */,
          border: "2px solid #000" /* Border color */,
          borderRadius: "15px",
          marginTop: "65px",
          marginLeft: "17vw ",
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} title={marker.title} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({\
})(GoogleMap);
