import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Axios from 'axios';
import Paiment from './Paiment';

const OrderProcess = () => {
  const { id } = useParams();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const userId = user.id;
      const ticketData = {
        eventId: id,
        userId: userId,
      };
      
      // Make the POST request using Axios
      Axios
        .post('http://localhost:3001/api/tickets/', ticketData)
        .then(response => {
          // Handle success
          console.log('Ticket saved successfully:', response.data);
        })
        .catch(error => {
          // Handle error
          console.error('Error saving ticket:', error);
        });
    }
  }, [isLoaded, isSignedIn]);

  return <div className='w-full'>
  <div className='w-1/2 mx-auto mt-24'>/
    <Paiment />
    <div>
      <h2 className='text-2xl text-center my-8 font-bold text-primary'>
      Woohoo! Your Order is Confirmed!
      </h2>
      <p className='text-center mb-8 text-darkPrimary font-semibold text-lg'>
      Congratulations! You're officially on your way to an unforgettable experience! Your order has been successfully processed, and we couldn't be more thrilled to have you join us.

Event Details:
      </p>
    </div>
    <div className='flex justify-around mb-24 items-center'>
    <div className=' mt-8 text-white font-medium text-xl'>
    <a href='/tickets' className='bg-primary rounded-full px-6 py-2'>
      Check My Tickets
    </a>
  </div>      <div className=' mt-8 text-white font-medium text-xl'>
  <a href='/' className='bg-primary rounded-full px-6 py-2'>
    Back to Homepage
  </a>
</div>
    </div>
  </div>
  </div>;
};

export default OrderProcess;
