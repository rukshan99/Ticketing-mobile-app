const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    source: { type: String, required: [true, 'Source location is required'] },
    destination: { type: String, required: [true, 'Destination location is required'] },
    route: { type: String, required: [true, 'Route is required'] },
    bus: { type: Object, required: [true, 'Bus details are required'] },
    noOfPassengers: { type: Number, required: [true, 'Route is required'] }
})

module.exports =  mongoose.model('Trip', tripSchema);