const TripLog = require('../schemas/tripLog.schema');
const HttpError = require('../models/http-error.model');

exports.saveTripLog = async (req, res, next) => {
    if (!req.body) {
        res.send(new HttpError('Invalid request body', 400));
    }
    const { source, destination, passengerID, ticketID, noOfPassengers, fare } = req.body;
    const tripLog = new TripLog({
        passengerID,
        ticketID,
        source,
        destination,
        noOfPassengers,
        fare
    });
    try {
        const savedTriplog = await tripLog.save();
        res.status(200).send({ data: savedTriplog });
    } catch (error) {
        res.send(new HttpError(error.message, 500));
    }
}


