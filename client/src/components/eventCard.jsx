import React, { useState, useEffect } from 'react';
import { SignedIn } from "@clerk/clerk-react";

const EventCard = ({ imageSource, id, price, purchasedAt, title, date, time, location }) => {

  const [isEventIncluded, setIsEventIncluded] = useState()

  useEffect(() => {
    // Check if the word "work" is included in the URL
    const url = window.location.href;
    const isWorkIncluded = url.includes("event");

    if (isWorkIncluded) {
      console.log("The word 'event' is included in the URL.");
      setIsEventIncluded(`/event/${id}`)
      // Do something if the word 'work' is included
    } else {
      setIsEventIncluded(`/event/${id}`)
      // Do something else if the word 'work' is not included
    }
  }, []); 

  return (
    <div className="bg-white shadow-xl flex p-5 flex-col justify-center rounded-lg items-center relative">
      <div className="w-full ">
        <img
          src={imageSource}
          alt="event image"
          className="object-cover h-[220px] w-full rounded-xl"
        />
      </div>
      <div className="absolute bg-purple-100 font-bold border border-2 border-primary rounded-lg px-2 py-1 right-10 top-10 text-primary">
        {price} $
      </div>
      <div className="w-full pt-4 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex">
          <div className="w-3/5">
            <div className="text-primary font-medium pt-4">
              {date[8]}
              {date[9]}-{date[5]}
              {date[6]}-{date[0]}
              {date[1]}
              {date[2]}
              {date[3]}, {time}
            </div>
            <div className="pt-2 text-small font-medium  text-gray-400">
              {location.city}, {location.country}
            </div>
            {
              purchasedAt && (
                <div className="pt-2 text-small font-medium  text-gray-400">
                  Purchased At : {purchasedAt[8]}
                  {purchasedAt[9]}-{purchasedAt[5]}
                  {purchasedAt[6]}-{purchasedAt[0]}
                  {purchasedAt[1]}
                  {purchasedAt[2]}
                  {purchasedAt[3]}
                </div>
              )
            }
          </div>
          <SignedIn>
          {console.log(id)}
            <div className="flex justify-center items-center w-2/5">
              <a
                href={isEventIncluded}
                className="bg-primary text-white py-4 px-8 -mx-4 rounded-lg"
              >
                View More
              </a>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
