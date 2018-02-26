var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Pilot = require('../models/pilot.model');

// CREATES A NEW PILOT
router.post('/', function (req, res) {
    Pilot.create({
            name: req.body.name,
            lastName: req.body.lastName,
            drivingLicense: req.body.drivingLicense,
            age: req.body.age
        }, 
        function (err, pilot) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(pilot);
        });
});

// RETURNS ALL THE PILOTS IN THE DATABASE
router.get('/', function (req, res) {
    Pilot.find({}, function (err, pilots) {
        if (err) return res.status(500).send("There was a problem finding the pilots.");
        res.status(200).send(pilots);
    });
});

// GETS A SINGLE PILOT FROM THE DATABASE
router.get('/:id', function (req, res) {
    Pilot.findById(req.params.id, function (err, pilot) {
        if (err) return res.status(500).send("There was a problem finding the pilot.");
        if (!pilot) return res.status(404).send("No pilot found.");
        res.status(200).send(pilot);
    });
});

// DELETES A PILOT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Pilot.findByIdAndRemove(req.params.id, function (err, pilot) {
        if (err) return res.status(500).send("There was a problem deleting the pilot.");
        res.status(200).send("Pilot: "+ pilot.name +" was deleted.");
    });
});

// UPDATES A SINGLE PILOT IN THE DATABASE
router.put('/:id', function (req, res) {
    Pilot.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, pilot) {
        if (err) return res.status(500).send("There was a problem updating the pilot.");
        res.status(200).send(pilot);
    });
});

module.exports = router;
