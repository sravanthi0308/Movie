// const Movie = require('../Models/Movie');

import Movie from '../Models/Movie.js';

export const addMovie = async(req,res) => {
    try {
        console.log("Adding movie",req.body)
        const { movieName, totalTickets, theatreName } = req.body;
        if(!movieName || !totalTickets || !theatreName === null){
            return res.status(200).json({message: 'please provide all required fields'});
        }

        const movie = new Movie({ movieName, totalTickets, theatreName });
        console.log('Movie',movie)
        await movie.save();
        console.log('Movie',movie)
        // res.status(201).json(movie);
        res.json({ message: 'Movie added successfully:' ,movieName});
    } catch(error) {
        console.error('Error adding movie',error)
        res.status(500).send('Server error - movie');
    }
};

export const viewAllMovies = async(req,res) => {
    try {
        console.log("View movies",req.body)
        if(!Movie){
            throw new Error("Movie model ")
        }
        const movies = await Movie.find();
        console.log('Movies fetched successfully',movies)
        // res.status(200).json(movies);
        res.json(movies);
    } catch(error) {
        console.error('Error retrieving movie',error)
        res.status(500).send('Server error -all');
    }
};
