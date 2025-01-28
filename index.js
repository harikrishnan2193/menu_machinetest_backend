const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const router = require('./routers/router')


const menuApp = express();

menuApp.use(cors());
menuApp.use(bodyParser.json());
menuApp.use(router)


const sequelize = require('./db/connection');
sequelize
    .authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Unable to connect to the database:', error));


const PORT = process.env.PORT || 5000;
menuApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

menuApp.get("/", (req, res) => {
    res.send('server running successfully and readdy to accept client reqest');
  });