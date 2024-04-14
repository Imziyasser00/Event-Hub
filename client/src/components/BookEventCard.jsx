import React, { useState, useEffect } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import Axios from "axios";
import Loading from "./Loading";
import { useUser } from "@clerk/clerk-react";
const BookEventCard = ({ id, date, price, location, time }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();
  const [Booked, setBooked] = useState('Book Now')
  useEffect(() => {
    if (isLoaded) {
      const userId = user.id;
      console.log(userId)
      Axios.get(`http://localhost:3001/api/tickets/user/${userId}`)
        .then((res) => {
          setData(res.data);
          console.log(data)          
          res.data.map(
            (item) => {
              if(id == item.eventId) {setBooked("Already Booked");
              }}
          );
          
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
          setLoading(false); 
        });
    }
  }, [loading, Booked,isLoaded]);
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
          {!loading && Booked == "Already Booked"? (
            <div className="w-full flex items-center justify-center gap-2 border-primary  border-2 font-bold rounded pointer-events-none text-primary bg-purple-100 py-2 rounded-sm">
             {Booked} <FaRegCalendarCheck className="text-xl" />
            </div>
          ) : (
            <a className=" text-white" href={`/event/register/${id}`}>
            <div className="w-full bg-primary py-2 rounded-sm">{Booked}</div>
            </a>
          )}
        

        <div className="text-gray-400 pt-4">No Refund .</div>
      </div>
    </div>
  );
};

export default BookEventCard;
