const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index");
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Application starts with http://localhost:${port}`);
});
