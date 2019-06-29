const mongoose = require('mongoose');
Destination = mongoose.model('Destination');

exports.list = function (req, res) {
    Destination.find({}, function (err, destinations) {
        if (err)
            res.send(err);
        res.json(destinations);
    });
};




exports.create = function (req, res) {
    const table = new Destination(req.body);
    table.save(function (err, destination) {
        if (err)
            res.send(err);
        res.json(destination);
    });
};


exports.read = function (req, res) {
    Destination.findById(req.params.id, function (err, destination) {
        if (err)
            res.send(err);
        res.json(destination);
    });
};


exports.update = function (req, res) {
    Destination.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, destination) {
        if (err)
            res.send(err);
        res.json(destination);
    });
};


exports.delete = function (req, res) {


    Destination.remove({
        _id: req.params.id
    }, function (err, destination) {
        if (err)
            res.send(err);
        res.json({ message: 'Destination successfully deleted' });
    });
};