const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
const conn = mongoose.createConnection('mongodb://wasdag-app:faf4021799b9d7649272@ds115625.mlab.com:15625/wasdag')
conn.on('connected', function() {
    console.log('Connected to databse..');
});


var groupSchema = new mongoose.Schema({
    name: String
});

var Group = mongoose.model('Group', groupSchema);

app.post('/', function(req, res) {
    res.status(200).send({i:0});
    console.log('ey');
});

app.get('/', function(req, res) {
    res.send('Hello World');
});



app.listen(port, () => console.log(`App listening on port ${port}!`))