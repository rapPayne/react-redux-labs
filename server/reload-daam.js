const chalk = require('chalk');
const faker = require('faker');
const fs = require('fs');
const readline = require('readline');

const database = {};
const databaseFilePath = "./database.json";
const numberOfUsersToCreate = 25;
const usersStartingId = 100;
const creditCardTypes = [{ "4": "Visa" }, { "5": "Mastercard" }, { "6": "Discover" }];
const startingReservationId = 8573;
const daysToSchedule = 10;
const oneDayInMS = 24 * 60 * 60 * 1000;
const todayInMS = (new Date()).getTime();
const givenNames = require('./starters/given-names.json');
const familyNames = require('./starters/family-names.json');
const mailServers = require('./starters/mail-servers.json');

const prompt = `


Let's set up the NEW "Dinner And A Movie" database. We're going to blow 
away any old data in the database and regenerate some new data.

Ready to do all that? (Y/n)
`;

confirmContinue()
  .then(dropDatabase)
  .then(makeFilmsData)
  .then(makeTheatersData)
  .then(makeTablesData)
  .then(makeSeatsData)
  .then(makeUsersData)
  .then(makeShowingsData)
  .then(makeReservationsData)
  .then(sayGoodbye)
  .catch(err => console.error(`Error: ${errorMessage}: ${err}`))
  .then(saveDatabase)
  ;

function confirmContinue() {
  errorMessage = `Okay, we won't continue to run.`;
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(chalk.cyan(prompt), reply => {
      if (reply.length === 0 || reply.toLowerCase().split("")[0] === "y")
        resolve();
      else
        reject("Try another time, maybe?");
      rl.close();
    });
  });
}
function dropDatabase() {
  errorMessage = `Problem dropping the database`;
  console.log("Dropping the old database");
  return new Promise((resolve, reject) => {
    fs.unlink("./database.json", err => {
      if (err) {
        if (err.code === "ENOENT")  // Old file doesn't exist. Not a problem. Continue.
          resolve();
        else
          reject(err);
      }
      else
        resolve();
    });
  });
}
function makeFilmsData() {
  console.log("Making films data");
  const films = require('./starters/films.json');
  database.films = films.map(f => ({ ...f, runtime: getRandomRuntimeBetween(90, 150), release_date: getRecentDate(20) }));
  console.log("finished making films data");
}
function makeTheatersData() {
  console.log("Making theaters data");
  const theaters = require('./starters/theaters.json');
  database.theaters = theaters;
  console.log("finished making theaters data");
}
function makeTablesData() {
  errorMessage = `Problem making tables data`;
  console.log("Making tables data");
  let id = 1; let rows = 3; let columns = 5;
  for (let theater of database.theaters) {
    theater.tables = [];
    let table_number = 1;
    for (let x = 1; x <= rows; x++) {
      for (let y = 1; y <= columns; y++) {
        const table = { id: id++, table_number, x, y };
        theater.tables.push(table)
        table_number++;
      }
    }
  }
  console.log("Finished making tables data");
}
function makeSeatsData() {
  // Each table will have 1, 2, or 4 seats.
  // Loop through each table and pick one of those numbers
  errorMessage = `Problem making seats data`;
  console.log("Making seats data");
  const numbersOfSeatsArray = [1, 2, 4];
  let id = 1;
  for (theater of database.theaters) {
    for (table of theater.tables) {
      table.seats = [];
      const numberOfSeatsAtThisTable = numbersOfSeatsArray[Math.floor(Math.random() * numbersOfSeatsArray.length)];
      for (let seat_number = 1; seat_number <= numberOfSeatsAtThisTable; seat_number++) {
        const seat = { id, table_id: table._id, seat_number, price: 10.75 };
        table.seats.push(seat); // Add this seat to the table.
        id++;
      }
    }
  }
  console.log("Finished making seats data");
}
function makeUsersData() {
  errorMessage = `Problem making users data`;
  console.log("Making users data");
  const users = [];
  for (let i = 0; i < numberOfUsersToCreate; i++) {
    const given = getRandomGivenName();
    const family = getRandomFamilyName();
    const mail_server = getRandomMailServer();
    const phone = getRandomPhoneNumber();
    const password = getRandomPassword();
    const credit_card = getRandomCreditCard();
    users.push({
      id: i + usersStartingId,
      email: `${given.toLowerCase()}.${family.toLowerCase()}@${mail_server}`,
      password,
      name: { given, family },
      phone, credit_card,
    });
  }
  database.users = users;
  console.log("Finished making users data");
}
function makeShowingsData() {
  // Need to have films created and theaters created when this runs: it loops through both of those,
  // creating multiple showings of a film in each theater.
  errorMessage = `Problem making showings data`;
  console.log("Making showings data");
  const showings = [];
  showingId = 1;
  filmTheaterId = 0;
  for (let [index, film] of database.films.entries()) {
    // If there's no theater, skip this film. This will happen if we have more films than theaters
    if (!database.theaters[index]) continue;
    const theater_id = database.theaters[index].id
    // Create a daily schedule for the next X days
    const lastDayInMS = todayInMS + daysToSchedule * oneDayInMS;
    for (let day = todayInMS; day <= lastDayInMS; day += oneDayInMS) {
      const theDay = new Date(day).setHours(0, 0, 0, 0);
      const midnightLocalTime = new Date(day).setHours(23, 59);
      //console.log(`Showing Times:`, film.id, randomStartTime, midnightLocalTime)
      for (let showing_time = getRandomStartTime(theDay, 11, 14); showing_time < midnightLocalTime; showing_time = getNextStartingTime(showing_time, film.runtime)) {
        const showing = { id: showingId++, film_id: film.id, theater_id, showing_time };
        showings.push(showing);
      }
    }
  }
  database.showings = showings;
  console.log("Finished making showings data");
}
function makeReservationsData() {
  errorMessage = `Problem making reservations data`;
  console.log("Making reservations data");
  const reservations = [];
  let id = startingReservationId;
  // Loop through each seat for each showing.
  for (let showing of database.showings) {
    // Today's shows should be about 90% filled. Tomorrow's 80%, next day 70%, etc.
    const numOfDaysUntilShowing = (showing.showing_time - todayInMS) / oneDayInMS;
    const percentFull = (9 - numOfDaysUntilShowing) * 0.1;
    const theater = database.theaters.find(t => t.id === showing.theater_id);
    for (let table of theater.tables) {
      for (let seat of table.seats) {
        const reserved = (Math.random() + percentFull) > 1;
        if (reserved) {
          // Get a random, but real user
          const user = database.users[Math.floor(Math.random() * database.users.length)]
          const payment_key = getRandomPaymentKey();
          const reservation = { id, showing_id: showing.id, seat_id: seat.id, user_id: user.id, payment_key, };
          reservations.push(reservation);
          id++;
        }
      }
    }
  }
  database.reservations = reservations;
  console.log("Finished making reservations data");
}
function saveDatabase() {
  console.log('Saving database')
  fs.writeFileSync(databaseFilePath, JSON.stringify(database));
  console.log("Finished saving the database");
}
function sayGoodbye() {
  const message = `
 
 Finished loading all the data.
 
 Check it out by going ...

 npm run server

 ... and then browsing to ...
 
 http://localhost:3007/users
 http://localhost:3007/users/${usersStartingId + 3}
 http://localhost:3007/films
 http://localhost:3007/theaters

 You can hit five RESTful API endpoints
 - films, 
 - theaters, 
 - showings, 
 - reservations
 - users

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
  return `${number.slice(2, 5)}-${number.slice(5, 8)}-${number.slice(8, 12)}`;
}
function getRandomUsername(given_name, family_name, mail_server) {
  const randomFormat = Math.floor(Math.random() * (8 - 1) + 1);
  switch (randomFormat.toString()) {
    case "1": // given.family@mail
      return `${given_name}.${family_name}@${mail_server}`;
    case "2": // g.family
      return `${given_name.slice(0, 1)}.${family_name}`;
    case "3": // gfamily
      return `${given_name.slice(0, 1)}${family_name}`;
    case "4": // gFamilyRandom
      return `${given_name.slice(0, 1)}${family_name}${Math.random().toString().slice(2, 4)}`;
    case "5": // givenFamily
      return `${given_name}${family_name}`;
    case "6": // familyRandom
      return `${family_name}${Math.random().toString().slice(2, 4)}`;
    case "7": // givenRandom
      return `${given_name}${Math.random().toString().slice(2, 4)}`;
    case "8": // given_family
      return `${given_name}_${family_name}`;
    default:
      return "";
  }
}
function getRandomPassword() {
  return faker.internet.password(8, true);
}
function getRandomPaymentKey() {
  return `pk_${Math.random().toString().slice(2, 12)}`;
}
function getRandomCreditCard() {
  const firstDigit = Math.floor(Math.random() * (6 - 4) + 4);
  return {
    number: `${firstDigit}${Math.random().toString().slice(2, 17)}`,
    expiration: faker.date.future(5)
  }
}
function getRandomRuntimeBetween(min, max) {
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
  //const tzOffsetInMS = newDate.getTimezoneOffset() * 60 * 1000;
  const tzOffsetInMS = 0;
  const minutes = [0, 15, 30, 45];
  const randomHour = Math.floor(Math.random() * (latestHour - earliestHour) + earliestHour);
  const randomMinutes = minutes[Math.floor(Math.random() * minutes.length)];
  newDate.setHours(randomHour, randomMinutes);
  newDate = new Date(newDate.getTime() + tzOffsetInMS);
  return newDate;
}
function getNextStartingTime(lastStartingTime, runtimeinMinutes = 90) {
  const endTimeInMS = lastStartingTime.getTime() + runtimeinMinutes * 60 * 1000;
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