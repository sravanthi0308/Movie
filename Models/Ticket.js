import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const ticketSchema = new Schema({
    movieName: { type: String, required:true },
    theatreName: { type: String, required:true },
    ticketsBooked: { type: Number, required:true },
    seatNumber: { type:String, required: true}
});


// export default model('Ticket',ticketSchema);
const Ticket = mongoose.model('Ticket',ticketSchema);
export default Ticket;