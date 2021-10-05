const express = require('express');

const { saveTrip, getAllTrips, getTripById } = require('../controllers/trip.controller');

const router = express.Router();

router.post('/', saveTrip);
router.get('/', getAllTrips);
router.get('/:id', getTripById);

module.exports = router;