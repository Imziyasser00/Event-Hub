import React, { useState, useEffect } from "react";
import Axios from "axios";
import { MdEventAvailable } from "react-icons/md";
import { RiEyeFill } from "react-icons/ri";
import { MdEditCalendar } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useUser } from "@clerk/clerk-react";




const Events = () => {
    
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  

  useEffect(() => {

    if(isLoaded) { 

        if(user.id === 'user_2eg63N7gdRlnHzEeah0NJUSbtW3'){
            //setIsAdmin(true); 
            console.log(user.id)
            console.log(isAdmin) 
        }
        
    }
  }, []);

  const handleDelete = (eventId) => {
    setEventToDelete(eventId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    console.log("lppl");
    Axios.delete(`http://localhost:3001/api/event/${eventToDelete}`)
      .then((res) => {
        console.log("Event deleted successfully");
        refreshEvents();
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
    // Close modal after deletion
    setShowModal(false);
  };

  const refreshEvents = () => {
    Axios.get("http://localhost:3001/api/event")
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  };
  const cancelDelete = () => {
    // Reset eventToDelete state and close modal
    setEventToDelete(null);
    setShowModal(false);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/event")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl w-full h-full py-4 my-8 px-6">
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6">
            <p className="text-xl mb-4 text-primary font-bold">
              Are you sure you want to delete this event?
            </p>
            <div className="flex justify-end">
              <button
                onClick={confirmDelete}
                className="px-6 bg-primary text-white  py-2 mr-2 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-white text-primary border border-primary border-2 px-6 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" ">
        <div className=" flex items-center justify-between gap-2 items-center text-2xl font-bold text-primary">
          <div className="flex items-center gap-2">
            <MdEventAvailable /> <div>All Events :</div>
          </div>
          <div className="flex  items-center gap-4">
            <div className="text-white text-xl font-medium bg-primary px-4 py-2 rounded-lg">
              <a href="/admin/new_event">Create New Event</a>
            </div>
            <div className="text-white text-xl font-medium bg-primary px-4 py-2 rounded-lg">
              <a href="/admin/all_events">Show All Events</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex bg-primary py-2 px-4 rounded-lg text-white font-medium text-lg">
          <div className="w-1/4">Event Name</div>
          <div className="w-1/6">Event Category</div>
          <div className="w-1/4">Date - Time</div>
          <div className="w-1/6">Location</div>
          <div className="mr-10">Price</div>
          <div className="w-1/10">Actions</div>
        </div>
        {!loading &&
          events.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex  py-2 px-4 rounded-lg text-primary font-medium text-lg"
            >
              <div className="w-1/4 flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-12  rounded-lg h-8"
                  alt="lol"
                />{" "}
                {item.eventName}
              </div>
              <div className="w-1/6">{item.category}</div>
              <div className="w-1/4">
                {item.date.slice(0, 10)} - {item.time}
              </div>
              <div className="w-1/6">
                {item.location.city} - {item.location.country}
              </div>
              <div className="flex mr-10">{item.price} $</div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-xl">
                  <a href={`/event/${item._id}`}>
                    <RiEyeFill />
                  </a>
                </div>
                <div className="text-xl">
                  <a href={`/admin/event/${item._id}`}>
                    <MdEditCalendar />
                  </a>
                </div>
                <div className="text-xl">
                  <button onClick={() => handleDelete(item._id)}>
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
