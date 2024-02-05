const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const { findAll, create } = require("./controller/user.controller");
const db = require("./models");
const app = express();
require("dotenv").config();

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/getUsers", (req, res, next) => {
  return findAll(req, res, next);
});

app.post("/newUser", (req, res, next) => {
  return create(req, res, next);
});

app.listen(port, () => {
  console.log(`Application starts with http://localhost:${port}`);
});
