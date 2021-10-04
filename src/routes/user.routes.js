const express = require('express');
const router = express.Router();

const { registerUser, findAllDriver, findAllConductors, findAllInspectors } = require('../controllers/user.controller');

router.post('/signup', [], registerUser);
router.get('/allDrivers', [], findAllDriver);
router.get('/allConductors', [], findAllConductors);
router.get('/allInspectors', [], findAllInspectors);

module.exports = router;
