const express = require('express');

const { saveTrip, saveBus,getAllBuses, deleteRemoveBus, getSearchForBuses, getBus,updateBus } = require('../controllers/bus.controller');

const router = express.Router();

router.post('/', saveBus);
router.get('/', getAllBuses);
router.delete('/delete/:busId',deleteRemoveBus);
router.get('/search/:text', getSearchForBuses);
router.get('/edit/:busId',getBus)
router.put('/edit/:id',updateBus );


module.exports = router; 