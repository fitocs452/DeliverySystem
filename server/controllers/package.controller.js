var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Package = require('../models/package.model');

// CREATES A NEW PACKAGE
router.post('/', function (req, res) {
    Package.create({
            name: req.body.name,
            weight: req.body.weight,
            dimensions: req.body.dimensions
        },
        function (err, package) {
            if (err) return res.status(500).send(err);
            res.status(200).send(package);
        });
});

// RETURNS ALL THE PACKAGES IN THE DATABASE
router.get('/', function (req, res) {
    Package.find({}, function (err, packages) {
        if (err) return res.status(500).send("There was a problem finding the packages.");
        res.status(200).send(packages);
    });
});

// GETS A SINGLE PACKAGE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Package.findById(req.params.id, function (err, package) {
        if (err) return res.status(500).send("There was a problem finding the package.");
        if (!package) return res.status(404).send("No package found.");
        res.status(200).send(package);
    });
});

// DELETES A PACKAGE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Package.findByIdAndRemove(req.params.id, function (err, package) {
        if (err) return res.status(500).send("There was a problem deleting the package.");
        res.status(200).send("Package: "+ package.id +" was deleted.");
    });
});

// UPDATES A SINGLE PACKAGE IN THE DATABASE
router.put('/:id', function (req, res) {
    Package.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, package) {
        if (err) return res.status(500).send("There was a problem updating the package.");
        res.status(200).send(package);
    });
});

module.exports = router;
