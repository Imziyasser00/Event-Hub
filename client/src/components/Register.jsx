import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa6";
import { FcSimCardChip } from "react-icons/fc";

const Register = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { id } = useParams();
  const [eventData, setEventData] = useState();
  const [loading, setLoading] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [monthDate, setMonthDate] = useState("MM");
  const [yearDate, setYearDate] = useState("YY");
  const [ccv, setCcv] = useState("CCV");

  const handleCcv = (e) => {
    // Retrieve the input value
    const value = e.target.value;

    // Remove non-digit characters
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length > 3) {
      value = numericValue.slice(0, 3);
    }

    // Add spaces every four digits
    const formattedValue = numericValue.replace(/\d{4}(?=.)/g, "$& ");

    setCcv(formattedValue);
  };

  const handleName = (e) => {
    const value = e.target.value;
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    setCardName(value);
  };

  const handleCard = (e) => {
    // Retrieve the input value
    let value = e.target.value;
    console.log(value);
    
    // Remove non-digit characters
    let numericValue = value.replace(/\D/g, "");
    if (numericValue.length > 16) {
      numericValue = numericValue.slice(0, 16);
      console.log(value);
    }

    // Add spaces every four digits
    const formattedValue = numericValue.replace(/\d{4}(?=.)/g, "$& ");

    // Update state with the formatted value
    setCardNumber(formattedValue);
  };

  const handleMonth = (e) => {
    // Retrieve the input value
    const value = e.target.value;

   
      setMonthDate(value);
  };

  const handleYear = (e) => {
    // Retrieve the input value
    const value = e.target.value;

   
      setYearDate(value);
   
  };

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      Axios.get(`http://localhost:3001/api/event/${id}`)
        .then((res) => {
          console.log("Response data:", res.data); // Log response data
          setEventData(res.data);
          setLoading(false);
          const userId = user.id;
        })
        .catch((error) => {
          console.error("Error fetching events:", error); // Log error
          setLoading(false);
        });
    }
  }, [isLoaded, isSignedIn, id]);

  return (
    <div className="w-full flex flex-col md:flex-row m-5 mb-12">
      <div className="w-full md:w-1/2 mt-16 border-r-4 border-primary">
        <div className="text-xl text-primary flex gap-4 justify-start items-center">
          <FaCreditCard /> <span className="font-bold ">Payment</span>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col items-center mt-20">
            <div className="w-3/5 h-56 bg-primary rounded-xl">
              <div className="text-white font-bold text-2xl w-full flex pr-6 pt-2 justify-end">
                Visa
              </div>
              <div className="w-full pt-8 text-6xl pl-7">
                <FcSimCardChip />
              </div>
              <div className="text-white font-medium tracking-wider text-2xl pl-8">
                {cardNumber ? cardNumber : "0000 0000 0000 0000"}{" "}
                {/* Display formatted card number */}
              </div>
              <div className="flex justify-between px-8 pt-4 text-white font-medium text-xl">
                <div className="w-3/5">
                  {cardName ? cardName : "Yassir Imzi"}
                </div>
                <div className="text-base w-3/5 mt-1">
                  Valid Until: {monthDate}/{yearDate}
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              <div>
                <div className="text-gray-500 font-medium text-lg">
                  Name of Card :
                </div>
                <div className="w-full ">
                  <input
                    onChange={handleName}
                    type="text"
                    value={cardName}
                    className="w-5/6 mt-3 border font-bold text-primary border-primary border-2 py-2 px-4 rounded-md bg-purple-100 focus:border-primary "
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              <div>
                <div className="text-gray-500 font-medium text-lg">
                  Card Number :
                </div>
                <div className="w-full relative">
                  <input
                    onChange={handleCard}
                    type="text"
                    value={cardNumber}
                    className="w-5/6 mt-3 font-bold text-primary border border-primary border-2 py-2 px-4 rounded-md bg-purple-100 focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 mt-5">
                <div className="text-gray-500 font-medium text-lg">
                  Valid Until :
                </div>
                <div className="flex gap-4">
                  <select
                    onChange={handleMonth}
                    name="pets"
                    id="pet-select"
                    className="w-13 mt-3 border flex font-medium tracking-wider text-primary border-primary tracking-wide border-2 py-2 px-4 rounded-md bg-purple-100 focus:border-primary"
                  >
                    <option value="01" selected>
                      01
                    </option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select
                    onChange={handleYear}
                    name="pets"
                    id="pet-select"
                    className="w-13 mt-3 border flex font-medium tracking-wider text-primary border-primary tracking-wide border-2 py-2 px-4 rounded-md bg-purple-100 focus:border-primary"
                  >
                    <option value="24" selected>
                      2024
                    </option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                    <option value="29">2029</option>
                    <option value="30">2030</option>
                    <option value="31">2031</option>
                    <option value="32">2032</option>
                    <option value="33">2033</option>
                    <option value="34">2034</option>
                    <option value="35">2035</option>
                    <option value="36">2036</option>
                    <option value="37">2037 </option>
                  </select>
                </div>
              </div>
              <div className="w-1/2 mt-5">
                <div className="text-gray-500 font-medium  tracking-wider text-lg">
                  CCV :
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={handleCcv}
                    type="text"
                    value={ccv}
                    className="w-3/5 md:w-1/5 mt-3 pr-2 border flex font-medium tracking-wider text-primary border-primary tracking-wide border-2 py-2 px-4 rounded-md bg-purple-100 focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="font-bold text-2xl text-primary mt-16 m-8">
          Event Details :
        </div>
        {!loading && eventData ? (
          <div className="p-8">
            <div className="">
              <img
                className="w-5/6 h-[320px] mx-auto rounded-lg"
                src={eventData.image}
                alt="event"
              />
            </div>
            <div className="w-5/6 mx-auto font-bold text-primary text-2xl border-b-2 pb-4 mt-3 border-darkPrimary">
              {eventData.eventName}
            </div>
            <div className="w-5/6 mx-auto mt-3 flex justify-between border-b-2 pb-3 border-darkPrimary">
              <div className="text-xl font-bold text-primary ">Price : </div>
              <div className="text-primary font-bold text-xl">
                {eventData.price} $
              </div>
            </div>
            <div className="w-5/6 mx-auto mt-3 flex justify-between border-b-2 border-darkPrimary pb-3">
              <div className="text-xl font-bold text-primary">
                Transaction fee :{" "}
              </div>
              <div className="text-primary font-bold text-xl">1 $</div>
            </div>
            <div className="w-5/6 mx-auto mt-3 flex justify-between border-b-2 border-darkPrimary pb-3">
              <div className="text-xl font-bold text-primary">
                Total : 
              </div>
              <div className="text-primary font-bold text-xl">{eventData.price + 1 } $</div>
            </div>

            <div className="w-5/6 mx-auto mt-5">
              <a href={`/ordered/${eventData._id}`} className=" bg-primary text-center">
                <div className="w-full bg-primary py-4 text-white text-xl font-medium tracking-widest rounded-lg hover:bg-darkPrimary transition-all">
                  Book Now
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center mt-8 ">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Register;