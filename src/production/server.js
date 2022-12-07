const path = require('path');
const express = require('express');
const cors = require('cors')
const fetch =  require('node-fetch');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 3031);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../app/static')))


module.exports = app;
