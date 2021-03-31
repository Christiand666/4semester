const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let indexRouter = require('./Routes/index.js');

let app = express();

app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', indexRouter);

app.listen(3001);

module.exports = app;