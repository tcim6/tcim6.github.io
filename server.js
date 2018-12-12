const express = require('express');
const app = express();
const port = 3000;
const database = 'mongodb://localhost/wasdag';

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.connect(database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database at ' + database);
});

let cl = console.log;

var groupSchema = new mongoose.Schema({
    groupName: String
}); // could attack method

var Group = mongoose.model('Group', groupSchema);

app.post('/', function(req, res) {
    cl('ok: a');
    let newGroup = new Group({groupName: 'EY'}); // gets id from mongoose lib 
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

// app.use('/', express.static(path.join(__dirname, 'dist')))
 
// app.all('*', (req, res) => { 
//     res.status(200).sendFile(path.join(__dirname, 'dist') + "/index.html");
// });

app.listen(port, () => console.log(`App listening on port ${port}!`))