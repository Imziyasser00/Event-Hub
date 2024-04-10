import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import BookEventCard from "./BookEventCard";
import map from "../assets/map.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import RecommandedEvents from "./RecommandedEvents";

const EventHero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { id } = useParams();
  const [eventData, setEventData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetching data from the server
    Axios.get(`http://localhost:3001/api/event/${id}`)
      .then((res) => {
        setEventData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, [id]);
  const url = window.location.href;
  const handleclick = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCopied(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [isCopied]);

  return (
    <div className="mt-6" >
      {!loading && eventData && (
        <div>
          <div className="h-full relative ">
            <div className="relative">
              <img
                src={eventData.image}
                alt="event image"
                className="object-cover z-1000 h-[500px] w-full rounded-md top-0 left-0"
              />
              <div className="bg-[#00000082] absolute w-full h-full top-0 rounded-md left-0"></div>
            </div>
            <div className="w-full h-full absolute text-white top-0 left-0">
              <div className="w-full h-full flex">
                <div className="w-1/2 flex flex-col justify-end mb-24 pl-12">
                  <div>
                    <h2 className="text-5xl w-full font-bold">
                      {eventData.eventName}
                    </h2>
                    <h2 className="text-2xl font-medium pt-4">
                      {eventData.category}
                    </h2>
                    <h2 className="text-lg font-normal pt-4">
                      {eventData.location.city}
                    </h2>
                  </div>
                </div>
                <div className="h-full w-1/2 flex justify-end mr-24 items-center">
                  <div className="w-4/6">
                    <BookEventCard
                      id={eventData._id}
                      price={eventData.price}
                      date={eventData.date}
                      time={eventData.time}
                      location={eventData.location}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full h-full ">
            <div className="w-1/2 p-8 flex flex-col gap-5">
              <div className="">
                <h2 className="text-2xl font-bold">Description</h2>
                <div className="pt-5">{eventData.description}</div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Hours</h2>
                <div>
                  <div className="pt-5 text-gray-500 font-semibold">
                    Weekdays hour :{" "}
                    <span className="text-primary font-bold">7PM - 10PM</span>
                  </div>
                  <div className="pt-5 text-gray-500 font-semibold -mt-2">
                    Sunday hour :{" "}
                    <span className="text-primary font-bold">4PM - 9PM</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold">Organizer Contact</h2>
                <div className="pt-5">
                  Please go to{" "}
                  <span className="underline text-primary font-bold">
                    <a href="https://www.yassirimzi.com" target="_blank">
                      www.yassirimzi.com
                    </a>
                  </span>{" "}
                  To Work together on some projects.
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl font-bold">Speakers : </h2>
                <div className="pt-5 gap-8 flex flex-col">
                  {eventData.speakers.map((item, index) => (
                    <div
                      key={index}
                      className=""
                    >
                    <div className=" font-bold  flex flex-col gap-2">
                      <span className="underline text-xl text-primary ">
                      {item.name} 
                      </span>
                      <div className="text-black ">
                      {item.title} , {item.company}
                      </div>
                    </div>
                      <div className="text-gray-400">
                        {item.bio}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-full w-1/2">
              <div className="p-8 flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Event location</h2>
                <img src={map} alt="map" className="" />
                <h2 className="text-xl font-semibold">{eventData.eventName}</h2>
                <p className="text-gray-500 -mt-2">
                  Dummy location generation model by RSU ... Our approach
                  generates more realistic dummy locations
                </p>
                <div>
                  <CopyToClipboard text={url}>
                    <div className="flex gap-2">
                      <div className="bg-purple-100 border border-2 border-primary rounded-md text-primary py-2 px-4">
                        {url}
                      </div>
                      <button
                        className="bg-primary text-white px-4 font-bold w-full flex justify-center items-center gap-4 rounded-md"
                        onClick={handleclick}
                      >
                        <FaCopy /> Copy
                      </button>
                    </div>
                  </CopyToClipboard>
                  {isCopied && (
                    <div className="text-primary font-bold pt-3">
                      Link is successfully Copied.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-bgColor p-8">
            <RecommandedEvents category={eventData.category} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventHero;
