const fs = require('fs');
// "/showings/:film_id/:date": "/showings?film_id=:film_id&showing_time_gte=:date&showing_time_lte=:date",

module.exports = (req, res, next) => {
  if (req.path === "/showings" && req.query.film_id && req.query.showing_time && req.method === "GET") {
    const { film_id, showing_time } = req.query;
    const startTime = new Date(showing_time);
    startTime.setHours(0);
    startTime.setMinutes(0);
    const endTime = new Date(showing_time);
    endTime.setHours(23);
    endTime.setMinutes(59);
    const db = readDatabase();
    res.status(200).json(db.showings
      .filter(s => s.film_id === +film_id)
      .filter(s => new Date(s.showing_time) > startTime && new Date(s.showing_time) < endTime)
    );
    return;
  } else {
    next();
  }
}

//TODO: Should the hardcoded filename be read from a variable provided by json-server?
const dbFile = './database.json';
function readDatabase() {
  return JSON.parse(fs.readFileSync(dbFile));
}
function saveDatabase(db) {
  fs.writeFileSync(dbFile, JSON.stringify(db));
}