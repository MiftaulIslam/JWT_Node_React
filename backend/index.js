const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authentication = require('./routes/authentication');
const authorization = require('./routes/authorization');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const ConnectMongo = require('./connection/dbconnection');

const app = express();

app.use(cookieParser());
dotenv.config();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', // Ensure the origin is set correctly
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

ConnectMongo();
app.use('/auth', authentication);
app.use('/protect', authorization);

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
