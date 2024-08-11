const messages = require("../models/messages");
module.exports = {
  get: (req, res) => {
    res.render("form");
  },
  post: (req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.authorsName,
      added: new Date(),
    });
    res.redirect("/");
  },
};
