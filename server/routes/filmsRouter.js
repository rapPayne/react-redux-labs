const express = require('express');

const routes = (films) => {
  const apiRouter = express.Router();
  apiRouter.route('/')
  .get( (req, res) => {
    films.find( (err, filmsEntries) => {
      if (err)
        res.status(500).send(err);
        else
        res.json(filmsEntries);
    });
  });

  apiRouter.route('/:film_id').get((req, res) => {
    const { film_id } = req.params;
    films.findOne({ id: film_id }, (err, filmsEntry) => {
      if (err)
        res.status(500).send(err);
      else
        res.json(filmsEntry)
    });
  });
  
  //Still need to write POST, PATCH, DELETE
  return apiRouter;
}

module.exports = routes;