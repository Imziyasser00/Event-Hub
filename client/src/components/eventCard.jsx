import React from "react";

const EventCard = ({ imageSource, price, title, date, time, location }) => {
  return (
    <div className="bg-white shadow-xl flex p-5 flex-col justify-center rounded-lg items-center">
      <div className="w-full ">
        <img
          src={imageSource}
          alt="event image"
          className="object-cover h-[220px] w-full rounded-xl"
        />
      </div>
      <div className="w-full pt-4 ">
        <h2 className="text-xl font-bold">{title}</h2>
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
      </div>
    </div>
  );
};

export default EventCard;
