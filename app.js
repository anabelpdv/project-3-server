require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session'); 
const cors         = require('cors');




require("./configs/database/db.setup");

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}))

app.use(session({
  secret: "urban-explorer",
  resave: true,
  saveUninitialized: true,
}))


require('./configs/passport/passport.setup')(app);


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



app.use('/', require('./routes/location.routes'))
app.use('/', require('./routes/index'));
app.use('/', require('./routes/auth.routes'))

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
