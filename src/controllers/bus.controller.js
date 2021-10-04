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

exports.getRoutesForStations = async (req, res, next) => {

    const sourse =req.query.sourse;
    const destination = req.query.destination;
    
    Bus.find({ Stations:sourse } && { Stations: destination})
   
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Bus with given stations" });
      else res.send({ data: data });
      console.log(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: err.message || "Error retrieving Bus details with given stations " });
    });
}

exports.getBusesForRoute = async (req, res, next) => {

    // const route =req.query.route;

    Bus.find({ route: 'Negambo 255' })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Bus with given route " });
      else res.send({ data: data });
      console.log(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: err.message || "Error retrieving Bus details with given route" });
    });
}