const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
var router = express.Router();

const routes = require('./routes/API');

// parse application/x-www-form-urlencoded
var jsonParser = express.json({
  type: 'application/json'
});

var urlencodedParser = express.urlencoded({
  extended: true,
  type: 'application/x-www-form-urlencoded'
})

// Fix Access Control Allow Credentials
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// Middlewares
// Force credentials
app.use(cors(corsOptions));
// Allow JSON request
app.use(jsonParser);
app.use(urlencodedParser);
// Set routes for API
app.use('/', routes);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected to DB"));

// Start listening
app.listen(process.env.PORT_SERVER, () => {
  console.log(`Listening on port ${process.env.PORT_SERVER}`)
})
