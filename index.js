const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageRouter = require("./routes/messageRouter");

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message/", messageRouter);

app.listen(PORT, () =>
  console.log(`Express app running - listening on port ${PORT}`)
);

/** TODO
 * Style app
 */
