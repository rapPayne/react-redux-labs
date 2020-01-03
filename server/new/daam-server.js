const bodyParser = require('body-parser');
const fs = require('fs');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const middlewares = jsonServer.defaults()

// Parses the text as JSON and exposes the resulting object on req.body.
server.use(bodyParser.json());

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Load custom routes
// Authenticate/login
server.post('/api/login', (req, res) => {
  fs.readFile('database.json', (err, data) => {
    const { email, password } = req.body;
    console.log(email, password)
    if (err)
      res.status(500).send(err);
    else {
      const databaseContents = JSON.parse(data);
      const user = databaseContents
        .users
        .find(u => u.email === email && u.password === password);
      if (!user)
        res.status(401).send();
      else
        res.json(user);
    }
  });
});

server.post('/api/logout', (req, res) => {
  const { sessionId } = req.body;
  // TODO: Delete the session here
  res.status(204).send();
});


// Return all reservations for a given showingId
server.get('/api/showings/:showing_id/reservations', (req, res) => {
  // TODO: if this showing_id isn't a number, return a 400-series
  const showing_id = +req.params.showing_id;  // Convert the string to a number
  fs.readFile('database.json', (err, data) => {
    if (err)
      res.status(500).send(err);
    else {
      const databaseContents = JSON.parse(data)
      res.json(databaseContents
        .reservations
        .filter(s => s.showing_id === showing_id)
      );
    }
  });
});

server.get('/api/showings/:film_id/:date', (req, res) => {
  // TODO: if this film_id isn't a number, return a 400-series
  const film_id = +req.params.film_id;  // Convert the string to a number
  // TODO: if date isn't a JS Date, return a 400-series
  const startTime = new Date(req.params.date);
  startTime.setHours(0);
  startTime.setMinutes(0);
  const endTime = new Date(req.params.date);
  endTime.setHours(23);
  endTime.setMinutes(59);
  console.log(film_id, startTime, endTime);
  fs.readFile('database.json', (err, data) => {
    if (err)
      res.status(500).send(err);
    else {
      const databaseContents = JSON.parse(data)
      res.json(databaseContents
        .showings
        .filter(s => s.film_id === +film_id)
        .filter(s => new Date(s.showing_time) > startTime && new Date(s.showing_time) < endTime)
      );
    }
  });
});


// Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//  res.jsonp(req.query)
// })

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//  if (req.method === 'POST') {
//   req.body.createdAt = Date.now()
//  }
//  // Continue to JSON Server router
//  next()
// })

// Use default router
server.use('/api', router)
const port = process.env.PORT || 3007;

server.listen(port, () => {
  console.log(`Dinner and a movie data server is running on port ${port}`)
})