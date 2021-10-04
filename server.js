var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path') 

const errorHandler = require('./_helpers/error.handler');

require('dotenv').config({path: __dirname + '/.env'})

/* import *
  *  routes *
    *    here */
const TripRoutes = require('./src/routes/trip.routes');
const UserRoutes = require('./src/routes/user.routes');
const BusRoutes = require('./src/routes/bus.routes');
const TripLogRoutes = require('./src/routes/tripLog.routes');

const connectionString = process.env['MONGO_CONNECTION_STRING'];

app = express(),
port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/* global *
  *  error *
    *    handler */
app.use(errorHandler);

/* add *
  *  routes *
    *    here */
app.use('/api/v1/trips/', TripRoutes);
app.use('/api/v1/user/', UserRoutes);
app.use('/api/v1/buses/', BusRoutes);
app.use('/api/v1/tripLogs/', TripLogRoutes);

mongoose
.connect(connectionString)
.then(() => {
  app.listen(port, () => {
    console.log('Server is listening on port ' + port + `\n http://localhost:${port}`);
});
})
.catch(err => {
    console.log(err);
});