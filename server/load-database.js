// Node script to create the database with realistic-looking initial data.
const readline = require('readline');
const fs = require('fs');
const mongoose = require('mongoose');
const chalk = require('chalk');
const givenNames = require('./json/given-names.json');
const familyNames = require('./json/family-names.json');
const mailServers = require('./json/mail-servers.json');

// Models
const filmsModel = require('./models/filmsModel');
const theatersModel = require('./models/theatersModel');
const showingsModel = require('./models/showingsModel');
const tablesModel = require('./models/tablesModel');
const seatsModel = require('./models/seatsModel');
const reservationsModel = require('./models/reservationsModel');

let errorMessage = "";
let films;
let theaters = [];
const showings = [];
const tables = [];
const seats = [];
const daysToSchedule = 10;
const oneDayInMS = 24 * 60 * 60 * 1000;
const todayInMS = (new Date()).getTime();

const prompt = `


Let's set up the "Dinner And A Movie" database. We're going to blow 
away any old data in the database and regenerate some new data.

Ready to do all that?
`;

connectToDatabase()
  .then(confirmContinue)
  .then(dropDatabase)
  .then(makeFilmsData)
  .then(makeTheatersData)
  .then(makeShowingsData)
  .then(makeTablesData)
  .then(makeSeatsData)
  .then(makeReservationsData)
  .then(sayGoodbye)
  .catch(err => console.error(`Error: ${errorMessage}: ${err}`))
  .then(closeDatabase)
  ;

function connectToDatabase() {
  console.log("Connecting to the database");
  errorMessage = `Can't connect to your database server. Please ensure that it is running and try again. Here's the error:`;
  mongoose.Promise = global.Promise;
  return mongoose.connect("mongodb://localhost/daam");
}
function confirmContinue() {
  errorMessage = `Okay, we won't continue to run.`;
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(chalk.cyan(prompt), reply => {
      if (reply.toLowerCase().split("")[0] !== "y")
        reject("Try another time, maybe?");
      else
        resolve();
      rl.close();
    });
  });
}
function dropDatabase() {
  errorMessage = `Problem dropping the database`;
  console.log("Dropping the old database");
  return new Promise((resolve, reject) => {
    mongoose.connection.db.dropDatabase(err => {
      if (err)
        reject(err);
      else
        resolve();
    });
  });
}
function makeFilmsData() {
  errorMessage = `Problem making films data`;
  console.log("Making films data");
  const promiseList = [];
  new Promise((resolve, reject) => {
    fs.readFile('json/films.json', 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  }).then(data => {
    films = JSON.parse(data);
    films = films.map(f => Object.assign({}, f, { running_time: getRandomRunningTimeBetween(90, 150), release_date: getRecentDate(20) }));
    films.forEach(film => {
      const e = new filmsModel(film);
      promiseList.push(e.save());
    });
  }).catch(err => {
    errorMessage = `Couldn't find the films JSON file.`;
    promiseList.push(new Promise((resolve, reject) => reject({ errorMessage, err })));
  }).then(console.log("finished films"));
  return Promise.all(promiseList);
}
function makeTheatersData() {
  errorMessage = `Problem making theaters data`;
  console.log("Making theaters data");
  const promise = new Promise((resolve, reject) => {
    fs.readFile('json/theaters.json', 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  })
    .then(console.log("read theaters file okay"))
    .then(data => {
      const promiseList = [];
      const rawTheaters = JSON.parse(data);
      rawTheaters.forEach(entity => {
        const e = new theatersModel(entity);
        theaters.push(e);
        promiseList.push(e.save());
      });
      return Promise.all(promiseList).then(console.log("All theaters are created"));
    });
  return promise;
}
function makeShowingsData() {
  // Need to have films created and theaters created when this runs: it loops through both of those,
  // creating multiple showings of a film in each theater.
  errorMessage = `Problem making showings data`;
  console.log("Making showings data");
  const promisesList = [];
  showingId = 1;
  filmTheaterId = 0;
  for (let [index, film] of films.entries()) {
    // If there's no theater, skip this film. This will happen if we have more films than theaters
    if (!theaters[index]) continue;
    const theater_id = theaters[index].id
    // Create a daily schedule for the next 10 days
    const lastDayInMS = todayInMS + daysToSchedule * oneDayInMS;
    const tzOffsetInMS = (new Date()).getTimezoneOffset() * 60 * 1000;
    for (let day = todayInMS; day <= lastDayInMS; day += oneDayInMS) {
      const theDay = new Date(day);
      theDay.setHours(0, 0, 0, 0);
      const midnightLocalTime = new Date(theDay.setHours(23, 59));
      for (let showing_time = getRandomStartTime(theDay, 11, 14); showing_time < midnightLocalTime; showing_time = getNextStartingTime(showing_time, film.running_time)) {
        const showing = new showingsModel({ id: showingId++, film_id: film.id, theater_id, showing_time });
        promisesList.push(showing.save());
        showings.push(showing);
      }
    }
  }
  return Promise.all(promisesList);
}
function makeTablesData() {
  errorMessage = `Problem making tables data`;
  console.log("Making tables data");
  let id = 1; let rows = 3; let columns = 5;
  const promisesList = [];
  for (let theater of theaters) {
    let table_number = 1;
    for (let x = 1; x <= rows; x++) {
      for (let y = 1; y <= columns; y++) {
        const table = new tablesModel({ id: id++, theater_id: theater.id, table_number, x, y });
        theater.tables.push(table._id)
        promisesList.push(table.save());
        tables.push(table);
        table_number++;
      }
    }
    promisesList.push(theater.save());
  }
  return Promise.all(promisesList);
}
function makeSeatsData() {
  // Each table will have 1, 2, or 4 seats.
  // Loop through each table and pick one of those numbers
  errorMessage = `Problem making seats data`;
  console.log("Making seats data");
  const promisesList = [];
  const numbersOfSeatsArray = [1, 2, 4];
  for (table of tables) {
    const numberOfSeatsAtThisTable = numbersOfSeatsArray[Math.floor(Math.random() * numbersOfSeatsArray.length)];
    for (let seat_number = 1; seat_number <= numberOfSeatsAtThisTable; seat_number++) {
      const seat = new seatsModel({ table_id: table._id, seat_number, price: 10.75 });
      table.seats.push(seat._id); // Add this seat to the table.
      seats.push(seat);
      promisesList.push(seat.save());
    }
    promisesList.push(table.save());
  }
  return Promise.all(promisesList);
}
function makeReservationsData() {
  errorMessage = `Problem making reservations data`;
  console.log("Making reservations data");
  const promisesList = [];
  // Loop through each seat for each showing.
  for (let showing of showings) {
    // Today's shows should be about 90% filled. Tomorrow's 80%, next day 70%, etc.
    const numOfDaysUntilShowing = (showing.showing_time - todayInMS) / oneDayInMS;
    const percentFull = (9 - numOfDaysUntilShowing) * 0.1;
    const theater = theaters.find(t => t.id === showing.theater_id);
    for (let table of theater.tables.map(tid => tables.find(table => table._id === tid))) {
      for (let seat of table.seats.map(sid => seats.find(seat => sid === seat._id))) {
        const reserved = (Math.random() + percentFull) > 1;
        if (reserved) {
          const given_name = getRandomGivenName();
          const family_name = getRandomFamilyName();
          const mailServer = getRandomMailServer();
          const phone = getRandomPhoneNumber();
          const payment_key = getRandomPaymentKey();
          const reservation = new reservationsModel({ showing_id: showing.id, seat_id: seat.id, given_name, family_name, payment_key, email: `${given_name.toLowerCase()}.${family_name.toLowerCase()}@${mailServer}`, phone });
          showing.reservations.push(reservation._id);
          promisesList.push(reservation.save());
        }
      }
    }
    promisesList.push(showing.save());
  }
  return Promise.all(promisesList);
}
function closeDatabase() {
  console.log("Closing connection to the database");
  return mongoose.connection.close();
}
function sayGoodbye() {
  const message = `
  
  Finished loading all the data.
  
  Check it out by looking at the Mongo DB. Go ...

  mongo daam
  
  ... and then ...
  
  show collections
  db.films.find()
  db.theaters.find()
  
  You will see six collections (films, theaters, showings, reservations, et al) and then all 
  the data in the films collection and the theaters collection.

  `;
  console.log(message);
}
/////////////////////////////////////////////////////////////////////
// Helper functions below
/////////////////////////////////////////////////////////////////////
function getRandomGivenName() {
  return givenNames[Math.floor(Math.random() * givenNames.length)];
}
function getRandomFamilyName() {
  return familyNames[Math.floor(Math.random() * familyNames.length)];
}
function getRandomMailServer() {
  return mailServers[Math.floor(Math.random() * mailServers.length)];
}
function getRandomPhoneNumber() {
  const number = Math.random().toString();
  return `(${number.slice(2, 5)}) ${number.slice(5, 8)}-${number.slice(8, 12)}`;
}
function getRandomPaymentKey() {
  return `pk_${Math.random().toString().slice(2, 12)}`;
}
function getRandomRunningTimeBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRecentDate(withinDays) {
  const milliseconds = (Math.random() * withinDays) * 24 * 60 * 60 * 1000;
  const recentDate = Date.now() - milliseconds;
  return new Date(recentDate);
}
// Returns a *UTC* time between the *local* hours passed in.
function getRandomStartTime(date, earliestHour, latestHour) {
  let newDate = new Date(date);
  const tzOffsetInMS = newDate.getTimezoneOffset() * 60 * 1000;
  const minutes = [0, 15, 30, 45];
  const randomHour = Math.floor(Math.random() * (latestHour - earliestHour) + earliestHour);
  const randomMinutes = minutes[Math.floor(Math.random() * minutes.length)];
  newDate.setHours(randomHour, randomMinutes);
  newDate = new Date(newDate.getTime() + tzOffsetInMS);
  return newDate;
}
function getNextStartingTime(lastStartingTime, runningTimeinMinutes) {
  const endTimeInMS = lastStartingTime.getTime() + runningTimeinMinutes * 60 * 1000;
  const nextStartingTime = new Date(endTimeInMS);
  const minutes = nextStartingTime.getMinutes();
  if (minutes < 15)
    nextStartingTime.setMinutes(15, 0, 0);
  else if (minutes < 30)
    nextStartingTime.setMinutes(30);
  else if (minutes < 45)
    nextStartingTime.setMinutes(45);
  else {
    const hour = nextStartingTime.getHours() + 1;
    nextStartingTime.setHours(hour, 0, 0, 0);
  }
  return nextStartingTime;
}