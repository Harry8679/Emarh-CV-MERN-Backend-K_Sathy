const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./dbConnect');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});