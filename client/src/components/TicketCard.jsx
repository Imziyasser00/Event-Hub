import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import EventCard from '../components/EventCard';

const TicketCard = ({ticket}) => {
    const [event, setEvents] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // Fetching data from the server
        Axios.get(`http://localhost:3001/api/event/${ticket.eventId}`)
          .then((res) => {
            setEvents(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching events:", error);
            setLoading(false);
          });
      }, []);
  return (
    <div className='w-1/3'>
    { !loading && event && <EventCard
        price={event.price}
        imageSource={event.image}
        title={event.eventName}
        date={event.date}
        time={event.time}
        location={event.location}
        id={event._id}
        purchasedAt={ticket.purchasedAt}
      />
    }
    
    </div>
  )
}

export default TicketCard
