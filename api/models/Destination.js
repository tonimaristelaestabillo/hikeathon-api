const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DestinationSchema = new Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    about: {
        type: String,
    },
    temperature: {
        type: String,
    },
    height: {
        type: Number,
    },
    difficulty: {
        type: Number,
    },
    duration: {
        type: String,
    },
    water: {
        type: Number,
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Destination', DestinationSchema);