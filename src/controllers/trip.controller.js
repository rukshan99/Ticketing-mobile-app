const Trip = require('../schemas/trip.schema');
const HttpError = require('../models/http-error.model');

exports.saveTrip = async (req, res, next) => {
    if (!req.body) {
        res.send(new HttpError('Invalid request body', 400));
    }
    const { source, destination, route, bus, noOfPassengers, passengerId } = req.body;
    const trip = new Trip({
        source,
        destination,
        route,
        bus,
        noOfPassengers,
        passengerId
    });
    try {
        const savedTrip = await trip.save();
        res.status(200).send({ data: savedTrip });
    } catch (error) {
        res.send(new HttpError(error.message, 500));
    }
}

exports.getAllTrips = async (req, res, next) => {
    try {
        const trips = Trip.find({});
        res.status(200).send({ data: trips });
    } catch (error) {
        res.send(new HttpError(error.message, 500));
    }
}

exports.getTripById = async (req, res, next) => {
    if (!req.body || !req.body.id) {
        res.send(new HttpError('Invalid request body', 400));
    }
    const tripId = req.body.id;

    try {
        const trip = await Trip.findOne({_id: tripId});
        res.status(200).send({ data: trip });
    } catch (error) {
        res.send(new HttpError(error.message, 500));
    }
}