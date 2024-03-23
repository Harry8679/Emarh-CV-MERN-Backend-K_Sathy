const express = require('express');
// const User = require('../models/user.model');
const { register, login } = require('../controllers/user.controller');
// const app = express();
const router = express.Router();

router.post('/login', login);

router.post('/register', register);

module.exports = router;