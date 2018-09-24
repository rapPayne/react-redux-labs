const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/daam");

// Data models and routes to get to them
const filmsModel = require('./models/filmsModel.js');
const showingsModel = require('./models/showingsModel.js');
const theatersModel = require('./models/theatersModel.js');
const tablesModel = require('./models/tablesModel.js');
const seatsModel = require('./models/seatsModel.js');
const reservationsModel = require('./models/reservationsModel.js');
const usersModel = require('./models/userModel');

const userRouter = require('./routes/userRouter')(usersModel);
const filmsRouter = require('./routes/filmsRouter.js')(filmsModel);
const showingsRouter = require('./routes/showingsRouter.js')(showingsModel, reservationsModel);
const theatersRouter = require('./routes/theatersRouter.js')(theatersModel, tablesModel, seatsModel);
const buyingRouter = require('./routes/buyingRouter')();
// const reservationsRouter = require('./routes/reservationsRouter.js')(reservationsModel);

//use sessions for tracking logins
app.use(session({
  secret: 'ahm ur secret ;-)',
  resave: true,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  console.log('request 1', req.session);
  next();
});

app.use('/api', buyingRouter);
app.use('/api/users', userRouter);
app.use('/api/films', filmsRouter);
app.use('/api/showings', showingsRouter);
app.use('/api/theaters', theatersRouter);
// app.use('/api/reservations', reservationsRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
