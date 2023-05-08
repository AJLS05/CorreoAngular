var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"CorreoDB"
});
app.listen(8081, function () {
  console.log('Servidor iniciado en el puerto 8081');
});

require('./controllers/usuarioController.js')(app,con);
require('./controllers/correoController.js')(app,con);
