import React, { useState, useEffect } from "react";
import HeroBg from "../assets/hero-bg.png";
import Axios from "axios";
import HeroFilter from "./HeroFilter";

const Hero = () => {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    // here we get the data by requesting data from this link
    // to our nodejs server
    Axios.get("http://localhost:3001/api/event").then((res) =>
      setEvents(res.data)
    );
  }, []);

  return (
    <div className="w-full pt-5 relative">
      <img src={HeroBg} alt="gero background" className="z-0"/>
      <div className="absolute w-full">
        <HeroFilter />
      </div>
    </div>
  );
};

export default Hero;
