import express from "express";
import eventRoute from "./routes/event.route.js";
import ticketRoute from "./routes/ticket.route.js";
import mongoose from "mongoose";
import cors from "cors"



const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static("public"))

// Routes 
app.use("/api/event", eventRoute);
app.use("/api/tickets", ticketRoute);

// MONGOOSE SETUP


const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const uri = "mongodb+srv://imziyasser00:testtesttest@cluster0.bl6jr6m.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is Connected'))
    .catch((err) => console.log(err, "db is not connected"));
