import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Axios from "axios";
import TicketCard from "./TicketCard";
import Loading from "./Loading";

const AllTickets = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetching data from the server
    if (isLoaded && isSignedIn) {
      const userId = user.id;
      Axios.get(`http://localhost:3001/api/tickets/user/${userId}`)
        .then((res) => {
          setTickets(res.data);
          console.log(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
          setIsLoading(false);
        });
    }
  }, [isLoaded, isSignedIn]);
  return (
    <div className="my-8 grid grid-cols-3 gap-4">
    {isLoading && (<div className=""><Loading /></div>)}
      {!isLoading &&
        tickets.map((item, index) => (
          <div key={index} className="w-full">
            <TicketCard ticket={item} />
          </div>
        ))}
        
    </div>
  );
};

export default AllTickets;
