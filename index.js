const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/data", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log("The App is listening on port 3000");
});
