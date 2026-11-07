const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const path = require('path');
let cl = console.log;

cl(bodyParser)

const connection = mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database:"mstatemap",
    user: 'root',          // username of the mysql connection
    password: 'a123'       // password of the mysql connection
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'dist'))) // style.css

app.post('/new',function(req, res){

    cl("Request");

    var sql=`INSERT INTO notes (id, content, tags) VALUES (null,'`+ req.body.note +`', 'c');`

    connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.status(200) // client OK
    console.log(result);
    });
});

app.get('/get',function(req, res) { // name
    connection.query("SELECT * FROM notes", function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(result)
    console.log(result);
    });
});

app.all('*', (req, res) => { 
    res.status(200).sendFile(path.join(__dirname, 'dist') + "/index.html");
    cl("hello there.. Incoming request..")
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

function createDatabase(db){
    connection.query("CREATE DATABASE "+db, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
}

// createDatabase("mstatemap")

function createTable(){
    connection.query(`CREATE TABLE notes (
      id int AUTO_INCREMENT PRIMARY KEY,
      content varchar(255) NOT NULL,
      tags varchar(255))`, function (err, result) {
        if (err) throw err;
        console.log("Table created..");
    });
}

createTable()

function dropTable(name){
    connection.query(`DROP TABLE notes;`, function (err, result) {
        if (err) throw err;
        console.log("Table dropped..");
    });    
}

// dropTable("notes")



function select(){}

// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });