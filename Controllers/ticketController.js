

import Ticket from '../Models/Ticket.js';
import Movie from '../Models/Movie.js';

export const bookTicket = async(req,res) => {
    try {
        console.log('Bpooking ticket',req.body);
        const { movieName, theatreName, ticketsBooked, seatNumber } = req.body;

        const movie = await Movie.findOne({ movieName, theatreName });
        if(!movie) return res.status(400).json({ message: 'Movie not found' });

        // const remainingTickets = movie.totalTickets - ticketsBooked;
        const remainingTickets = ticketsBooked- movie.totalTickets;
        if(remainingTickets < 0) return res.status(400).json({ message: 'Not enough tickets'});


        const ticket = new Ticket({ movieName, theatreName, ticketsBooked, seatNumber });
        await ticket.save();

        movie.totalTickets = remainingTickets;
        await movie.save();

        res.json({ message: 'Ticket booked successfully' });
    } catch(error) {
        console.log('ERROR',error)
        res.status(500).send('Server error');
    }
};

export const getTickets = async(req,res) => {
    try {
        console.log('Tickets: ',req.body);
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};
