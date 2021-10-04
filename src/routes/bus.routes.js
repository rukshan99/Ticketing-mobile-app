const express = require('express');

const { saveTrip, saveBus, getRoutesForStations, getBusesForRoute } = require('../controllers/bus.controller');

const router = express.Router();

router.post('/', saveBus);
router.get('/routes', getRoutesForStations);
router.get('/buses', getBusesForRoute);

module.exports = router; 