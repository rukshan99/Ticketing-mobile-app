const Bus = require('../schemas/bus.schema');
const HttpError = require('../models/http-error.model');

const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;

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

exports.getAllBuses = async (req, res) => {
    await Bus.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }

  exports.deleteRemoveBus = async (req, res, next) => {
	const busId = req.params.busId;
	try {
		const removingResult = await Bus.deleteOne({ _id: new ObjectId(busId) });

		res.status(200).json({ message: 'Bus removed successfully', RemovedbusId: busId });
	} catch (error) {
		if (!error.statusCode) error.statusCode = 500;
		next(error);
	}
};

exports.getSearchForBuses = async (req, res, next) => {
	const searchText = req.params.text;

	try {
		const foundBuses = await Bus.find({ route:{ $regex: new RegExp(searchText), $options: "i" } })
		res.status(200).json({ buses: foundBuses });
	} catch (error) {
		if (!error.statusCode) error.statusCode = 500;
		next(error);
	}
};