const fs = require('fs');

module.exports = (req, res, next) => {
  if (req._parsedUrl.path === "/login" && req.method === "POST") {
    const {email, password} = req.body;
    const file = fs.readFileSync('./database.json');
    const db = JSON.parse(file);
    const users = db.users;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      res.status(200).send({...user, password:"****", token: "at03kn"});
    } else {
      res.status(401).send("Bad username or password");
    }
    return;
  } else {
    next();
  }
}
