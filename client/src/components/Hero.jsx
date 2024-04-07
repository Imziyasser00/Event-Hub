import React from "react";
import HeroBg from "../assets/hero-bg.png";
import HeroFilter from "./HeroFilter";
import HomeEvents from "./HomeEvents";

const Hero = () => {


  return (
    <div className="w-full pt-5 relative">
      <img src={HeroBg} alt="gero background" className="z-0"/>
      <div className="absolute w-full">
        <HeroFilter />
      </div>
      <div className="mt-16">
        <HomeEvents />
      </div>
    </div>
  );
};

export default Hero;
