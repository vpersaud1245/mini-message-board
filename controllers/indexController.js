const messages = require("../models/messages");

module.exports = {
  get: (req, res) => {
    res.render("index", { messages: messages });
  },
};
