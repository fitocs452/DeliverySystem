let express = require('express');
let app = express();
let db = require('./db');
let cors = require('cors')

let UserController = require('./server/controllers/user.controller');
let PackageController = require('./server/controllers/package.controller');
let PilotController = require('./server/controllers/pilot.controller');
let RouteController = require('./server/controllers/route.controller');
let TruckController = require('./server/controllers/truck.controller');

app.use(cors())
app.use('/user', UserController);
app.use('/package', PackageController);
app.use('/pilot', PilotController);
app.use('/route', RouteController);
app.use('/truck', TruckController);

module.exports = app;
