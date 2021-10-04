const express = require('express');

const { saveTripLog } = require('../controllers/tripLog.controller');

const router = express.Router();

router.post('/', saveTripLog);

module.exports = router;