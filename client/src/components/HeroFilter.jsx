import React, { useState } from "react";
import Select from "react-select";
import eventsCategory from "../lib/eventsCategory";
import eventsCities from '../lib/eventsCities';
import SearchIcon from '../assets/search-icon.svg';

const HeroFilter = () => {
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const categoryOptions = eventsCategory;
  const citiesOptions = eventsCities;
  return (
    <div className="bg-[#2a1498] w-4/5 mx-auto flex gap-8 py-5 px-8 rounded-xl -mt-20 z-40 ">
      <div className="w-1/3">
        <p className="text-white pb-3 font-medium">Looking For</p>
        <Select options={categoryOptions} onChange={(e) => setCategory(e.value)} />
      </div>
      <div className="w-1/3">
        <p className="text-white pb-3 font-medium">Location</p>
        <Select
          options={citiesOptions}
          onChange={(e) => setCity(e.value)}
          className="h-18"
        />
      </div>
      <div className="w-1/3 flex rounded-lg bg-primary justify-center items-center cursor-pointer hover:bg-darkPrimary transition-all">
      <div className="flex text-white ">
        <img src={SearchIcon} alt="search icon" className="fill-white" width={32} />
          <p className="font-medium text-xl text-white py-2 px-4">
            Search 
          </p>
      </div>
      </div>
    </div>
  );
};

export default HeroFilter;
