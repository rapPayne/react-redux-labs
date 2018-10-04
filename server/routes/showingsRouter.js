const express = require('express');

const routes = (showings, reservations) => {
  const apiRouter = express.Router();
  apiRouter.route('/')
    .get((req, res) => {
      showings.find((err, showingsEntries) => {
        if (err)
          res.status(500).send(err);
        else
          res.json(showingsEntries);
      });
    })

  apiRouter.route('/:showing_id').get((req, res) => {
    const { showing_id } = req.params;
    showings.findOne({ id: showing_id }, (err, showingsEntry) => {
      if (err)
        res.status(500).send(err);
      else
        res.json(showingsEntry)
    });
  });

  // All reservations for a given showing_id
  apiRouter.route('/:showing_id/reservations').get((req, res) => {
    const { showing_id } = req.params;
    showings.findOne({ id: showing_id })
    .populate({path: 'reservations', model: reservations})
    .exec( (err, showingAndReservationsEntries) => {
      if (err)
        res.status(500).send(err);
      else
        res.json(showingAndReservationsEntries.reservations)
    });
  });

  apiRouter.route('/:film_id/:date').get((req, res) => {
    const { film_id, date } = req.params;
    const startTime = new Date(date);
    startTime.setHours(0);
    startTime.setMinutes(0);
    const endTime = new Date(date);
    endTime.setHours(23);
    endTime.setMinutes(59);
    showings.find({
      film_id, showing_time: {
        $gte: startTime,
        $lte: endTime
      }
    }, null, {
        sort: { showing_time: 1 }
      }
      , (err, showingsEntries) => {
        if (err)
          res.status(500).send(err);
        else
          res.json(showingsEntries)
      });
  });

  //Still need to write POST, PATCH, DELETE
  return apiRouter;
}

module.exports = routes;