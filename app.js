
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';

import authRoutes from './Routes/authRoutes.js';
import movieRoutes from './Routes/movieRoutes.js';
import ticketRoutes from './Routes/ticketRoutes.js';


dotenv.config();//load envvar

const app = express();



connectDB();

//middleware
app.use(express.json({ extended:false }));
app.get('/',(req,res) => {
    res.send('Server is running');
});

//define routes
app.use('/api/v1.0/moviebooking',authRoutes);
app.use('/api/v1.0/moviebooking/movies',movieRoutes);
app.use('/api/v1.0/tickets',ticketRoutes);

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

