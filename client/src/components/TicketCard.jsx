import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import EventCard from '../components/EventCard';
import { pdf } from '@react-pdf/renderer';
import Ticket from './Ticket';
import { saveAs } from 'file-saver';


const TicketCard = ({ticket}) => {
  const generateAndDownloadPDF = async () => {
    const blob = await pdf(<Ticket eventId={ticket.eventId}  ticketId={ticket._id}/>).toBlob();
    saveAs(blob, 'document.pdf');
  };
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
    <div className='w-full'>
    { !loading && event && <EventCard
        price={event.price}
        imageSource={event.image}
        title={event.eventName}
        date={event.date}
        time={event.time}
        location={event.location}
        id={event._id}
        purchasedAt={ticket.purchasedAt}
        ticket={true}
        Download={generateAndDownloadPDF}
        eventId={ticket.eventId}
        ticketId={ticket._id}
      />
    }
    
    
    </div>
  )
}

export default TicketCard
