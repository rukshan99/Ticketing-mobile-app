const express = require('express');

const { saveTrip, saveBus } = require('../controllers/bus.controller');

const router = express.Router();

router.post('/', saveBus);

module.exports = router; 