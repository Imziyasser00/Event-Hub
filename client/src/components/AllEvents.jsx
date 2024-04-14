import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import EventCard from './EventCard';
import AllEventsHero from './AllEventsHero';
import Loading from './Loading';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedEvents, setDisplayedEvents] = useState(6);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/event")
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    // Show 6 more events when the "Show More" button is clicked
    setDisplayedEvents(prevDisplayedEvents => prevDisplayedEvents + 6);
  };

  return (
    <div>
      <div>
        <AllEventsHero />
      </div>

      <div className="mt-8">
        <div className="text-3xl ml-5 font-bold">
          All <span className="text-primary">Events</span>
        </div>
        {loading && (<div className=""><Loading /></div>)}
        <div className="my-10 grid grid-cols-3 gap-4">
          {/* Render events only when loading is false */}
          {!loading &&
            events.slice(0, displayedEvents).map((item, index) => (
              <div key={index}>
                <EventCard
                  price={item.price}
                  imageSource={item.image}
                  title={item.eventName}
                  date={item.date}
                  time={item.time}
                  location={item.location}
                  id={item._id}
                />
              </div>
            ))}
        </div>
        {events.length > displayedEvents && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="bg-primary hover:bg-darkPrimary mb-5 text-white font-bold text-xl py-2 px-6 rounded"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;