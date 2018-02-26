var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Truck = require('../models/truck.model');

// CREATES A NEW TRUCK
router.post('/', function (req, res) {
    Truck.create({
            name: req.body.name,
            color: req.body.color,
            model: req.body.model,
            weightCapacity: req.body.weightCapacity
        }, 
        function (err, truck) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(truck);
        });
});

// RETURNS ALL THE TRUCKS IN THE DATABASE
router.get('/', function (req, res) {
    Truck.find({}, function (err, trucks) {
        if (err) return res.status(500).send("There was a problem finding the trucks.");
        res.status(200).send(trucks);
    });
});

// GETS A SINGLE TRUCK FROM THE DATABASE
router.get('/:id', function (req, res) {
    Truck.findById(req.params.id, function (err, truck) {
        if (err) return res.status(500).send("There was a problem finding the truck.");
        if (!truck) return res.status(404).send("No truck found.");
        res.status(200).send(truck);
    });
});

// DELETES A TRUCK FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Truck.findByIdAndRemove(req.params.id, function (err, truck) {
        if (err) return res.status(500).send("There was a problem deleting the truck.");
        res.status(200).send("Truck: "+ truck.name +" was deleted.");
    });
});

// UPDATES A SINGLE TRUCK IN THE DATABASE
router.put('/:id', function (req, res) {
    Truck.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, truck) {
        if (err) return res.status(500).send("There was a problem updating the truck.");
        res.status(200).send(truck);
    });
});


module.exports = router;
