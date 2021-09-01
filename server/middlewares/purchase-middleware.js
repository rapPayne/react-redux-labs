const fs = require('fs');
const fetch = require('node-fetch');
// "/purchase"

//TODO: Should probably get this from a JSON Server variable.
const port = 3007;
//const rootUrl = `http://localhost:${port}`;
const rootUrl = "http://localhost:3007"
// To purchase, we should get showing_id, seats (Array of ints), 
module.exports = async (req, res, next) => {
  if (req.path.match(/purchase/) && req.method === "POST") {
    let newReservations = [];
    const { user_id, showing_id, seats } = req.body;
    // All these reservations were paid for with this one cc charge so use one payment key
    const _payment_key = `pk_${Math.floor(Math.random() * 9_000_000_000)} `;
    const reservations = seats.map(seat_id => ({
      "showing_id": showing_id.toString(), // Not sure why I'm toString()ing these. But they're strings in the file.
      "seat_id": seat_id.toString(),
      "user_id": user_id.toString(),
      "payment_key": _payment_key,
    }));
    try {
      const promises = reservations.map(r => fetch(
        `${rootUrl}/reservations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(r)
        }).then(res => res.json()));
      console.log("promises:", promises)
      newReservations = await Promise.all(promises);
    } catch (ex) {
      console.error("Error creating a reservation", ex);
      res.status(500).send('Error creating a reservation.')
    }
    res.status(201).json(newReservations)
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