const express = require("express");
const app = express();
const PORT = 3000;
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT, () =>
  console.log(`Express app running - listening on port ${PORT}`)
);
