import React, { useState } from "react";
import EventCategory from "../../lib/eventsCategory";
import Select from "react-select";

const AddEventForm = () => {
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    description: "",
    category: "",
    time: "",
    price: "",
    city: "",
    country: "",
    speakers: [],
    image: "",
  });

  const [showSpeakerModal, setShowSpeakerModal] = useState(false);
  const [newSpeaker, setNewSpeaker] = useState({ name: "", title: "", company: "", bio: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSpeaker({ ...newSpeaker, [name]: value });
  };

  const handleAddSpeaker = () => {
    setShowSpeakerModal(true);
  };

  const handleRemoveSpeaker = (index) => {
    const updatedSpeakers = [...formData.speakers];
    updatedSpeakers.splice(index, 1);
    setFormData({ ...formData, speakers: updatedSpeakers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      eventName: "",
      date: "",
      description: "",
      category: "",
      time: "",
      price: "",
      city: "",
      country: "",
      speakers: [],
      image: "",
    });
  };

  const handleSpeakerModalSubmit = () => {
    setFormData({ ...formData, speakers: [...formData.speakers, newSpeaker] });
    setShowSpeakerModal(false);
    setNewSpeaker({ name: "", title: "", company: "", bio: "" });
  };

  return (
    <div className="w-full">
      <div className="w-full text-center font-bold text-3xl text-primary my-12">
        Create Event
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="w-full flex gap-6">
          <label className=" w-1/2 text-primary font-bold text-xl">
            Event Name:
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"
            />
          </label>
          <div className="w-1/2 flex gap-4">
          <label className=" w-1/2 text-primary font-bold text-xl">
          Date:
          <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"
          />
          </label>
          <label className=" w-1/2 text-primary font-bold text-xl">
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"
            />
        </label>
          </div>
        </div>
        <label className=" w-full my-2 text-primary font-bold text-xl">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"
            />
        </label>
        <div className="flex gap-4 items-center ">
          <label className=" w-1/4  text-primary font-bold text-xl">
            Category:
            <Select
          options={EventCategory}
          onChange={(e)=>setCategory(e.value)}
          className=" mt-3 text-primary"
          name="category"
          />
           
          </label>
          <label className=" w-1/4  text-primary font-bold text-xl">
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"

          />
        </label>
        <label className=" w-1/4  text-primary font-bold text-xl">
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"

        />
      </label>
      <label className=" w-1/4  text-primary font-bold text-xl">
      Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"

          />
        </label>
        </div>
        
        
        
        <label className=" w-full  text-primary font-bold text-xl">
        Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"

          />
        </label>

        {/* Speakers */}
        {formData.speakers.map((speaker, index) => (
          <div key={index}>
            <h3>Speaker {index + 1}</h3>
            <label>
              Name:
              <input
                type="text"
                name={`speaker-name-${index}`}
                value={speaker.name}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <label>
              Title:
              <input
                type="text"
                name={`speaker-title-${index}`}
                value={speaker.title}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name={`speaker-company-${index}`}
                value={speaker.company}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <label>
              Bio:
              <textarea
                name={`speaker-bio-${index}`}
                value={speaker.bio}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveSpeaker(index)}>Remove Speaker</button>
          </div>
        ))}
        {/* Speaker modal */}
        {showSpeakerModal && (
          <div className="modal">
            <div className="modal-content">
              <h2 className="text-primary font-bold text-xl my-4">Speaker :</h2>
              <div className="w-full flex gap-4">
              <label className=" w-1/3 text-primary font-bold text-xl">
              Name:
              <input
              type="text"
              name="name"
              value={newSpeaker.name}
              onChange={handleChange}
              className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"
              
              />
              </label>
              <label className=" w-1/3 text-primary font-bold text-xl">
              Title:
              <input
                type="text"
                name="title"
                value={newSpeaker.title}
                onChange={handleChange}
                className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"

              />
            </label>
            <label className=" w-1/3 text-primary font-bold text-xl">
            Company:
              <input
                type="text"
                name="company"
                value={newSpeaker.company}
                onChange={handleChange}
                className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"

              />
            </label>
              </div>

              <label className=" w-full mt-4 text-primary font-bold text-xl">
              Bio:
                <textarea
                  name="bio"
                  value={newSpeaker.bio}
                  onChange={handleChange}
                  className="border border-2 border-darkPrimary rounded-sm py-2 px-4 mt-2 font-medium"
                />
              </label>
              <button onClick={handleSpeakerModalSubmit}>Add Speaker</button>
            </div>
          </div>
        )}
        <button className="w-full flex justify-center my-4" type="button" onClick={handleAddSpeaker}><div className="w-1/6 rounded-lg text-white font-medium py-2 text-xl bg-primary">Add Speaker</div></button>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
