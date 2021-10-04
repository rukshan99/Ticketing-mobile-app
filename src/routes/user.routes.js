const express = require('express');
const router = express.Router();

const { registerUser, findAllDriver, findAllConductors, findAllInspectors, authentication } = require('../controllers/user.controller');

router.post('/signup', [], registerUser);
router.get('/allDrivers', [], findAllDriver);
router.get('/allConductors', [], findAllConductors);
router.get('/allInspectors', [], findAllInspectors);
router.post('/signup', [], registerUser);
router.post('/signin', [], authentication);

module.exports = router;
