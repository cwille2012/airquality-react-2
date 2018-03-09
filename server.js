const express = require('express');
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

var whitelist = [
    'http://localhost:3000',
    'http://localhost:5000',
];
var corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

var dbHost = "localhost";
var dbPort = 27017;

var databaseName = "dashboard";
var databaseURL = 'mongodb://' + dbHost + ':' + dbPort + '/' + databaseName;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/sensors', function(req, res) {
    console.log('received sensor data')
    console.log(req.body)
        // MongoClient.connect(databaseURL, function(err, db) {
        //     if (err) throw err;
        //     var dbo = db.db("dashboard");
        //     dbo.collection("sensors").insertOne(req.body, function(err, res) {
        //         if (err) {
        //             throw err;
        //         }
        //         db.close();
        //     });
        //     res.status(200).send('ok');
        // });
    res.status(200).send('ok');
});

app.post('/api/test', function(req, res) {
    console.log('received sensor data')
    console.log(req.body)
});

app.get('/api/sensors', function(req, res) {
    MongoClient.connect(databaseURL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dashboard");
        dbo.collection("sensors").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
            db.close();
        });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));