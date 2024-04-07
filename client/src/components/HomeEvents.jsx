import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import EventCard from './EventCard'
import HeroBanner from './HeroBanner';

const HomeEvents = () => {
  const [events, setEvents] = useState([]);
  const [sixEvents, setSixEvents] = useState([])             
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from the server
    Axios.get("http://localhost:3001/api/event")
      .then((res) => {
        setEvents(res.data);
        setSixEvents(events.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className='text-3xl font-bold'>
        Upcoming<span className='text-primary'>Events</span>
      </div>
      <div className='my-10 grid grid-cols-3 gap-4'>
        {/* Render events only when loading is false */}
        {!loading && sixEvents.map((item, index) => (

          <div key={index}>
            <EventCard price={item.price} imageSource={item.image} title={item.eventName} date={item.date} time={item.time} location={item.location} />
          </div>
        ))}
      </div>
      <div>
          <HeroBanner />
      </div>
    </div>
  );
};

export default HomeEvents;
