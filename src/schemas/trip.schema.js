const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    source: { type: String, required: [true, 'Source location is required'] },
    destination: { type: String, required: [true, 'Destination location is required'] },
    route: { type: String, required: [true, 'Route is required'] },
    bus: { type: Object, required: [true, 'Bus details are required'] },
    noOfPassengers: { type: Number, required: [true, 'Route is required'] },
    fare: { type: Number, required: [true, 'Fare is required'] },
    passengerId: { type: Schema.ObjectId, required: [true, 'PassengerId is required'] },
})


module.exports =  mongoose.model('Trip', tripSchema);