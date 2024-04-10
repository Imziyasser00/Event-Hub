import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Axios from "axios";
import TicketCard from "./TicketCard";

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
    <div className="grid grid-col-3  my-12">
      {!isLoading &&
        tickets.map((item, index) => (
          <div key={index}>
            <TicketCard ticket={item} />
          </div>
        ))}
    </div>
  );
};

export default AllTickets;