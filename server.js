const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./dbConnect');
const userRoutes = require('./routes/user.route');

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});