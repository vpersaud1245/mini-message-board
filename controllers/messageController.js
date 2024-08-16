const messages = require("../models/messages");
module.exports = {
  get: (req, res) => {
    res.render("message", {
      messages: messages,
      messageId: Number(req.params.messageId),
    });
  },
};
