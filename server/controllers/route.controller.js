var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Route = require('../models/route.model');

// CREATES A NEW ROUTE
router.post('/', function (req, res) {
    Route.create({
            initialLocation: req.body.initialLocation,
            finalLocation: req.body.finalLocation,
            pilot: req.body.pilot,
            truck: req.body.truck,
            packages: req.body.packages
        }, 
        function (err, route) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(route);
        });
});

// RETURNS ALL THE ROUTES IN THE DATABASE
router.get('/', function (req, res) {
    Route.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE ROUTE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Route.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A ROUTE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Route.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("Route: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE ROUTE IN THE DATABASE
router.put('/:id', function (req, res) {
    Route.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;
