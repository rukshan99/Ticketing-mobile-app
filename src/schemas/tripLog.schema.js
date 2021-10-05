const mongoose = require('mongoose')

const tripLogSchema = new mongoose.Schema({
    passengerID: { type: String, required: [true, 'Passenger ID is required'] },
    ticketID: { type: String, required: [true, 'Ticket ID is required'] },
    source: { type: String, required: [true, 'Source location is required'] },
    destination: { type: String, required: [true, 'Destination location is required'] },
    noOfPassengers: { type: Number, required: [true, 'Route is required'] },
    fare: { type: Number, required: [true, 'Route is required'] }
    
    
})

module.exports =  mongoose.model('TripLog', tripLogSchema);