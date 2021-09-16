const express = require('express');

const { saveTrip } = require('../controllers/trip.controller');

const router = express.Router();

router.post('/', saveTrip);

module.exports = router;