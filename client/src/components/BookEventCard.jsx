import React from "react";

const BookEventCard = ({ id, date, price, location, time }) => {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col gap-3 w-full">
    <div className="w-full flex justify-between">
        <h2 className="font-bold text-2xl text-black">Date & time</h2>
        <div className="bg-purple-100 rounded-md border border-primary border-2 font-bold py-1 px-4 text-primary">
            {price} $
        </div>
    </div>
      <div className="w-full">
        <div className="text-primary font-medium pt-2">
          {date[8]}
          {date[9]}-{date[5]}
          {date[6]}-{date[0]}
          {date[1]}
          {date[2]}
          {date[3]}, {time}
        </div>
        <div className="pt-2 text-small font-medium  text-gray-400">
          {location.city} , {location.country}
        </div>
      </div>
      <div className="w-full text-center">
        <a className=" text-white" href="/event/:id/register">
            <div className="w- bg-primary py-2 rounded-sm">
                Book now
            </div>
        </a>
        <div className="text-gray-400 pt-4">
            No Refund .
        </div>
      </div>
    </div>
  );
};

export default BookEventCard;
