const express = require('express');
const bcrypt = require('bcrypt');

const routes = (users) => {
  const apiRouter = express.Router();

  apiRouter.route("/").post((req, res) => {
    console.log(req.body);
    const { email, username, password, passwordConf } = req.body;
    email || res.status(400).json({ error: "We can't register you without an email address." });
    username || res.status(400).json({ error: "We can't register you without an username." });
    password || res.status(400).json({ error: "We can't register you without a password." });
    password === passwordConf || res.status(400).json({ error: "The passwords don't match." });

    const userData = { email, username, password, passwordConf, };
    //use schema.create to insert data into the db
    users.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/profile');
      }
    });
  });

  apiRouter.route("/login").post((req, res) => {
    const { username, password } = req.body;
    users.findOne({ username })
      .exec((err, user) => {
        if (err || !user) {
          return res.status(401).json({ error: "bad username or password" });
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (result === true) {
            req.session.userId = user._id;
            return res.status(204).send();
          } else {
            return res.status(401).json({ error: "bad username or password" }); // Really bad passord, but let's not tell them that.
          }
        });
      });
  });

  // GET /logout
  apiRouter.route('/logout').get((req, res, next) => {
    console.log("logging out")
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.status(204).send();
        }
      });
    }
  });

  return apiRouter;
}

module.exports = routes;