import slides from "../../mock.json";
import Slider from "../../components/Slider/sliders";
import Communities from "./Communities";
import React, { useState, useEffect } from "react";
import agencies from "../../agencies.json";
import Navbar from "../../components/Navbar/Navbar";
import UserGeneratedCommunity from "../Community/UserGeneratedCommunity";
import "./home.css";
function Home2() {
  const [joinedCommunities, setJoinedCommunities] = useState([]);
  const agenciesData = agencies.agencies;
  return (
    <div>
      <Navbar joinedCommunities={joinedCommunities} />
      <Slider slides={slides} />
      <UserGeneratedCommunity />
      <h1 className="exploreTitle">
        <span>EXPLORE</span> & <span>JOIN</span>
      </h1>
      <Communities
        data={agenciesData}
        setJoinedCommunities={setJoinedCommunities}
      />
    </div>
  );
}
export default Home2;
