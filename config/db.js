
import mongoose from "mongoose";
// const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        console.log('connecting....')
        await mongoose.connect('mongodb://localhost:27017/movieBookingDB', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 });
        console.log('MongoDb coonected...');
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
};

// module.exports = connectDb;
export default connectDb;