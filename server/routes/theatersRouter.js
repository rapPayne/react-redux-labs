const express = require('express');

const routes = (theaters, tables, seats) => {
  const apiRouter = express.Router();

  // All the theaters
  apiRouter.route('/')
  .get( (req, res) => {
    theaters.find( (err, theatersEntries) => {
      if (err)
        res.status(500).send(err);
        else
        res.json(theatersEntries);
    });
  });

  // Just the theater itself. No tables.
  apiRouter.route('/:theater_id').get((req, res) => {
    const { theater_id } = req.params;
    theaters.findOne({ id: theater_id }, (err, theatersEntry) => {
      if (err)
        res.status(500).send(err);
      else
        res.json(theatersEntry)
    });
  });

  apiRouter.route('/:theater_id/tables').get((req, res) => {
    const { theater_id } = req.params;
    tables.find({ theater_id })
    .populate({path: 'seats', model:seats})
    .exec((err, tablesEntries) => {
      if (err)
        res.status(500).send(err);
      else
        res.json(tablesEntries)
    });
  });
  
  // No longer needed b/c we're getting the table data as a subset of the theater itself
  // TBH, we don't really need the theater_id since table_ids are unique, but this is more RESTful so ...
  // apiRouter.route('/:theater_id/tables/:table_id').get((req, res) => {
  //   const { table_id } = req.params;
  //   tables.findOne({ table_id }, (err, tableEntry) => {
  //     if (err)
  //       res.status(500).send(err);
  //     else
  //       res.json(tableEntry)
  //   });
  // });
  
  // No longer needed b/c we're getting the seats data as a subset of the table
  // apiRouter.route('/:theater_id/tables/:table_id/seats').get((req, res) => {
  //   const { table_id } = req.params;
  //   seats.find({ table_id }, (err, seatsEntries) => {
  //     if (err)
  //       res.status(500).send(err);
  //     else
  //       res.json(seatsEntries)
  //   });
  // });
  
  //Still need to write POST, PATCH, DELETE
  return apiRouter;
}

module.exports = routes;