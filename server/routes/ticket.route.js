import express from "express";

import Ticket from "../models/Ticket.js";

const router = express.Router();

// Create New Event :

router.post("/", async (req, res) => {
  try {
    const {
      eventId,
      userId,
      price,
    } = req.body;

    const newTicket = new Ticket({
        eventId,
        userId,
        price,
    });

    await newTicket.save();

    res.status(200).json({ message: "Ticket created with no problems" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const ticketUser = await Ticket.find({ userId: userId });
    res.status(200).json(ticketUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export default router;
