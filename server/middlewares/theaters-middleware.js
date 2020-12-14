const fs = require('fs');
// "/theaters/:theater_id/:tables"
//  "/theaters/:theater_id/tables": "/theaters/:theater_id?tables_only",

// Note: This shouldn't be necessary. json-server's docs say that 
// this route should work without any modification. But it doesn't
// So here we are. &shrug;
module.exports = (req, res, next) => {
  if (req.path.match(/theaters\/[0-9]+\/tables/) && req.method === "GET") {
    const match = req.path.match(/theaters\/([0-9]+)\/tables/)
    const theater_id = match[1];
    const db = readDatabase();
    const theater = db.theaters.find(t => t.id == theater_id)
    const tables = theater?.tables;
    if (tables) {
      res.status(200).json(tables)
    } else {
      res.status(404).send();
    }
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