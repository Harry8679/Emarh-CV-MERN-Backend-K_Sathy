const express = require('express');
const User = require('../models/user.model');
// const app = express();
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if (user) {
            res.send('Login Successful');
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/register', async (req, res) => {
    try {
        const existUser = await User.findOne({ username });

        if (existUser) {
            res.send('Username already exists');
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.send('Register Successful');
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;