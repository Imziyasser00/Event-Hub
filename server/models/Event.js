import mongoose from "mongoose";

const { Schema } = mongoose;

const EventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    speakers: [
        {
            name: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            company: {
                type: String,
                required: true,
            },
            bio: {
                type: String,
                required: true,
            }
        }
    ],
    image: {
        type: String, 
        required: true,
    },
},
{ timestamps: true }
);

const Event = mongoose.model('Event', EventSchema);

export default Event;
