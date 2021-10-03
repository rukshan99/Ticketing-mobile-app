const express = require('express');
const router = express.Router();

const { registerUser, authentication } = require('../controllers/user.controller');

router.post('/signup', [], registerUser);
router.post('/signin', [], authentication);

module.exports = router;
