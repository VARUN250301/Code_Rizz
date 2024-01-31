// NGOList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import slides from "../../mock.json";
import Slider from "../../components/Slider/sliders";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "../../components/Navbar/Navbar";

const NGOList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [ngos, setNGOs] = useState([]);

  useEffect(() => {
    // Get user's location using browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    // Fetch nearby NGOs using OpenStreetMap Nominatim API
    if (userLocation) {
      const { lat, lon } = userLocation;
      const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

      axios
        .get(nominatimUrl)
        .then((response) => {
          const country = response.data.address.country;
          const ngoSearchUrl = `https://nominatim.openstreetmap.org/search?country=${country}&category=ngo&format=json`;

          return axios.get(ngoSearchUrl);
        })
        .then((response) => {
          setNGOs(response.data);
        })
        .catch((error) => {
          console.error("Error fetching nearby NGOs:", error);
        });
    }
  }, [userLocation]);

  return (
    // <div>
    //   <h2>Nearby NGOs</h2>
    //   <ul>
    //     {ngos.map((ngo, index) => (
    //       <li key={index}>
    //         <strong>{ngo.display_name}</strong>
    //         <p>{ngo.address}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <Navbar />
      <Slider slides={slides} />
      <h1 style={{ textAlign: "center" }}>Nearby NGOs</h1>
      <div
      
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {ngos.map((ngo, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img
              variant="top"
              src={ngo.image_url || "default_image_url"}
            />
            <Card.Body>
              <Card.Title>{ngo.display_name}</Card.Title>
              <Card.Text>{ngo.address}</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NGOList;
