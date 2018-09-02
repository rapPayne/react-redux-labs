const express = require('express');

const routes = () => {
  const apiRouter = express.Router();
  apiRouter.route('/checkout')
    .post((req, res) => {
      if (!req.session.userId) {
        res.status(403).send({error: "You should be logged in before you checkout"});
        return;
      }
      console.log("reserving seats", req.body);
      const { reservations } = req.body;
      res.status(201).json({ orderId: 12345 })
    });

  return apiRouter;
}

module.exports = routes;