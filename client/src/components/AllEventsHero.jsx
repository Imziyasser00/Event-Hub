import React from "react";
import HeroImage from '../assets/AllEventsHeroImage.png'

const AllEventsHero = () => {
  return (
    <div className="p-4 mt-8 flex">

    <div className="w-1/2">
      <div className="text-black font-medium">
        Thriving Above Event Expectations.
      </div>
      <div className="font-bold flex mt-4 flex-col gap-4 text-7xl">
        <div className="flex">
          Event<span className="text-primary">Hub</span>
        </div>
        <div>the Best.Day.</div>
        <div>Ever.</div>
        <div className="flex gap-4 w-full mt-4">
          <div className="bg-primary p-4 w-1/5 rounded-xl flex flex-col gap-2">
            <div className="text-white text-2xl font-bold w-1/3">2k+</div>
            <div className="text-white font-medium text-sm w-full">
              Total Events Hosted
            </div>
          </div>
          <div className="bg-primary p-4 w-1/5 rounded-xl flex flex-col gap-2">
            <div className="text-white text-2xl font-bold w-1/3">100+</div>
            <div className="text-white font-medium text-sm w-full">
              Total Events Live
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-1/2 flex justify-center items-center mt-12">
        <img src={HeroImage} alt="hero Image"/>
    </div>
    </div>

  );
};

export default AllEventsHero;
