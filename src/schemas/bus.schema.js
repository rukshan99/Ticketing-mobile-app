const mongoose = require('mongoose')

const tripBusSchema = new mongoose.Schema({
    busID: { type: String, required: [true, 'Bus ID location is required'] },
    date: { type: String, required: [true, 'Date location is required'] },
    time: { type: String, required: [true, 'Time is required'] },
    route: { type: String, required: [true, 'Route details are required'] },
    BusNo: { type: String, required: [true, 'Bus No is required'] },
    Stations: []
})

module.exports =  mongoose.model('Bus', tripBusSchema);