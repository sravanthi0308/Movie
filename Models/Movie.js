// import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    movieName: { type: String, required:true },
    totalTickets: { type: Number, required:true },
    theatreName: { type: String, required:true }
});



const Movie = mongoose.model('Movie',movieSchema);
export default Movie;