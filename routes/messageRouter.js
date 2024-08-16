const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/:messageId", messageController.get);

module.exports = router;
