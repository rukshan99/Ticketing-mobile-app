const Bus = require('../schemas/bus.schema');
const HttpError = require('../models/http-error.model');

exports.saveBus = async (req, res, next) => {
    if (!req.body) {
        res.send(new HttpError('Invalid request body', 400));
    }
    const { busID, date, time, route, BusNo, Stations } = req.body;
    //const _stations = Stations.split(',');

    const bus = new Bus({
        busID,
        date,
        time,
        route,
        BusNo,
        Stations: []
    });
    try {
        const savedBus = await bus.save();
        res.status(200).send({ data: savedBus });
    } catch (error) {
        res.send(new HttpError(error.message, 500));
    }
}