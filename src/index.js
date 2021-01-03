const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


// Routes init
route(app);

// test from vscode

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
