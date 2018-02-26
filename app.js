let express = require('express');
let app = express();
let db = require('./db');

let UserController = require('./server/controllers/user.controller');
let PackageController = require('./server/controllers/package.controller');
let PilotController = require('./server/controllers/pilot.controller');
let RouteController = require('./server/controllers/pilot.controller');
let TruckController = require('./server/controllers/truck.controller');

app.use('/users', UserController);
app.use('/packages', PackageController);
app.use('/pilots', PilotController);
app.use('/routes', RouteController);
app.use('/trucks', TruckController);

module.exports = app;
