const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    //Models;
    Destination = require('./api/models/Destination'),
    bodyParser = require('body-parser');
//Environment Variables
require('dotenv').config();


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

app.listen(port, () => {
    mongoose.connect(process.env.MONGODB_URI)

    mongoose.connection
        .once('open', () => {
            console.log(`Started on port 3000`)
            console.log(' Hikeathon API Now Running!')
        })
        .on('error', error => {
            console.warn('Warning', error)
        })
})
