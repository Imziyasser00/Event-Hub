import express from "express";
import eventRoute from "./routes/event.route.js";
import mongoose from "mongoose";
import cors from "cors"



const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static("public"))

// Routes 
app.use("/api/event", eventRoute);

// MONGOOSE SETUP 

const PORT = 3001;
mongoose.connect("mongodb+srv://imziyasser00:Dimareal@cluster0.bl6jr6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    app.listen(PORT, () => console.log("MongoDb is Connected"))
})
.catch((err) => console.log(err + " db is not connected"))