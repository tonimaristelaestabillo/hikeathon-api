const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    //Models;
    Destination = require('./api/models/Destination'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./api/routes/destination'); //importing route
routes(app); //register the route

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to Hikeathon API!'
    })
});

app.listen(3000, () => {
    mongoose.connect('mongodb://localhost:27017/HikeathonDB');

    mongoose.connection
        .once('open', () => {
            console.log(`Started on port 3000`)
            console.log(' Hikeathon API Now Running!')
        })
        .on('error', error => {
            console.warn('Warning', error)
        })
})
