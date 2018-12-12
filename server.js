const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/wasdag');
conn.on('connected', function() {
    console.log('Connected to databse..');
});

let cl = console.log;

var groupSchema = new mongoose.Schema({
    groupName: String
});

// output group ??? groupSchema.methods.

var Group = mongoose.model('Group', groupSchema);

app.post('/', function(req, res) {
    cl('ok: a');
    let newGroup = new Group({groupName: 'EY'});
    cl('ok: b', newGroup);
    newGroup.save(function (err, group) {
        if (err) return console.error(err);
        cl('ok: c');
    });
    res.status(200).send({newGroup});
});

app.get('/', function(req, res) {
    res.send('Hello World');
});



app.listen(port, () => console.log(`App listening on port ${port}!`))