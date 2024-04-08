import React, { useState, useEffect } from "react";
import Axios from "axios";
import EventCard from "./EventCard";
const RecommandedEvents = ({ category }) => {
  const [recommandedEvents, setRecommandedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from the server
    Axios.get(
      `http://localhost:3001/api/event/category/${encodeURIComponent(category)}`
    )
      .then((res) => {
        setRecommandedEvents(res.data);
        console.log(recommandedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, [loading]);

  return (
    <div className="w-full ">
      <div>
        <h2 className="text-2xl font-bold">Other events you may like</h2>
      </div>
      <div className="w-full grid grid-cols-3 mt-8 gap-5">
      {!loading &&
        recommandedEvents.map((item, index) => (
            <EventCard
            key={index}
            imageSource={item.image}
            id={item._id}
            price={item.price}
            title={item.eventName}
            date={item.date}
            time={item.time}
            location={item.location}
            />
        ))}
        </div>
    </div>
  );
};

export default RecommandedEvents;
