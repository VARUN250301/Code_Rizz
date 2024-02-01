// App.js

import React, { useEffect, useState } from "react";
import GoogleMap from "./GoogleMaps";

const UserLocation = ({ cords }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting user location:", error),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  // const nearbyNGOs = [
  //   {
  //     title: "NGO 1",
  //     position: { lat: lat, lng: lang },
  //   },
  //   {
  //     title: "NGO 2",
  //     position: { lat: 19.07763388009483, lng: 72.86019193508902 },
  //   },
  //   // Add more NGOs with their positions
  // ];

  const [nearbyNGOs, setnearbyNGOs] = useState([]);
  console.log("cordsss", cords);
  return (
    <div>
      {userLocation ? (
        <GoogleMap markers={cords} initialCenter={userLocation} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserLocation;
