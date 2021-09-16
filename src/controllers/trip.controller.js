const Trip = require('../schemas/trip.schema');
const HttpError = require('../models/http-error');

exports.saveTrip = async (req, res, next) => {
    if (!req.body) {
        res.send(new HttpError('Invalid request body', 400));
    }
    const { source, destination, route, bus, noOfPassengers } = req.body;
    const trip = new Trip(
        source,
        destination,
        route,
        bus,
        noOfPassengers
    );
    try {
        const savedTrip = await trip.save();
        res.status(200).send({ data: savedTrip });
    } catch (error) {
        res.send(new HttpError(error.message, 500));
    }
}