const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const pg = require('pg');
const sequelize = require('sequelize');
const fs = require('fs');
const expressSessions = require('express-sessions');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.set('layout', 'layout');
app.use('/static', express.static('static'));
/*STEPHEN'S NOTES: The code below determines if an object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());
/*STEPHEN'S NOTES: Morgan allows info to be automatically logged while things are going on in the application.*/
app.use(morgan('dev'));
app.use(routes);

app.listen(8000, function () {
    console.log('Express running on http://localhost:8000/.')
});
