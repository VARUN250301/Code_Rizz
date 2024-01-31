import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import UserLocation from "./UserLocation";

const NGOList = () => {
  const [ngos, setNgos] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [ratio, setRatio] = useState();
  const [lan, setLan] = useState();

  const rectangleStyle = {
    width: "80vw" /* Adjust the width as needed */,
    height: "90vh" /* Adjust the height as needed */,
    border: "2px solid #000" /* Border color */,
    borderRadius: "15px" /* Border radius for curved corners */,
    boxShadow:
      "4px 4px 10px rgba(0, 0, 0, 0.3)" /* Box shadow for the rectangle */,
    marginTop: "50px",
    marginLeft: "17vw ",
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude}, ${longitude}`);
          console.log(userLocation);
          // const userLocation = (${latitude}, ${longitude});
          // setValues((prev) => ({ ...prev, location: userLocation }));
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const fetchNearbyNGOs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/ngos", {
          params: {
            location: "19.04787715022438, 72.90469371135369",
            radius: 500,
            type: "point_of_interest",
            keyword: "ngo",
            key: "AIzaSyBmy2F0EtGGkSn-yEgVMfsjAQ-q3qZW49w",
          },
        });

        setNgos(response.data.results);
        setRatio(ngos.map((ngo) => ngo.geometry.location.lat));

        setLan(ngos.map((ngo) => ngo.geometry.location.lng));

        console.log(ratio);
        console.log("Lan Data");
        console.log(lan);
      } catch (error) {
        console.error("Error fetching nearby NGOs:", error);
      }
    };

    fetchNearbyNGOs();
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={{ zIndex: "-1"}}>
          <UserLocation />
        </div>

        <Navbar />
      </div>
      <div>
        <h1 style={{ marginLeft: "-850px", paddingTop: "750px" }}>
          Near By NGO's
        </h1>
      </div>

      <div
        style={{
          position: "relative", // Ensure relative positioning
          marginLeft: "17vw",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {ngos.map((agency) => (
            <Card style={{ width: "28%", margin: "28px" }} key={agency.name}>
              {agency.photos && agency.photos.length > 0 ? (
                <div>
                  {agency.photos.map((photo, index) => (
                    <Card.Img
                      variant="top"
                      key={index}
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyBmy2F0EtGGkSn-yEgVMfsjAQ-q3qZW49w`}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <span>No photos available</span>
              )}

              <Card.Body>
                <Card.Title>{agency.name}</Card.Title>
                <Card.Text>{agency.vicinity}</Card.Text>
                <Button variant="primary">Join Community</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOList;
