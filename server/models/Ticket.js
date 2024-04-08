import mongoose from "mongoose";

const { Schema } = mongoose;

const TicketSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    purchasedAt: {
        type: Date,
        default: Date.now,
    },
},
{ timestamps: true }
);

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;
