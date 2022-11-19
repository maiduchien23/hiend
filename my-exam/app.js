var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

// parsing application/json
app.use(bodyParser.json());

//  parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

//  parsing multipart/form-data
app.use(upload.array());

app.listen(3000);
