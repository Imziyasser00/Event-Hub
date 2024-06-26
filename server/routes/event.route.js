import express from "express";

import Event from "../models/Event.js";

const router = express.Router();

// Create New Event :

router.post("/", async (req, res) => {
  try {
    const {
      eventName,
      description,
      category,
      date,
      location,
      time,
      price,
      speakers,
      image,
    } = req.body;

    const existingEvent = await Event.findOne({ eventName });
    if (existingEvent) {
      return res.status(400).json({ message: "event already exist " });
    }

    const newEvent = new Event({
      eventName,
      description,
      category,
      date,
      location,
      time,
      price,
      speakers,
      image,
    });

    await newEvent.save();

    res.status(200).json({ message: "Event created with no problems" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const events = await Event.findById(id);
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/category/:category", async (req, res) => {
    try {
      const eventCategory = decodeURIComponent(req.params.category);
      const events = await Event.find({ category: eventCategory });
      res.status(200).json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
      


router.put("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventDataToUpdate = req.body;

    await Event.findByIdAndUpdate(eventId, eventDataToUpdate);
    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ messgae: "Event deleted successfully" });
  } catch (error) {}
});

export default router;
