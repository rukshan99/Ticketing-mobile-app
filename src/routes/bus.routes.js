const express = require('express');

const { saveTrip, saveBus,getAllBuses, deleteRemoveBus, getSearchForBuses } = require('../controllers/bus.controller');

const router = express.Router();

router.post('/', saveBus);
router.get('/', getAllBuses);
router.delete('/delete/:busId',deleteRemoveBus);
router.get('/search/:text', getSearchForBuses);

module.exports = router; 