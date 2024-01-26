const db = require("../models");
const User = db.user;

// Create and Save a new Tutorial
exports.create = (req, res, next) => {
  const body = req.body || {};
  if (Object.keys(body).length > 0) {
    const newUser = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      password: body.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    User.create(newUser)
      .then((data) => {
        res.send("Successfully created");
      })
      .catch((err) => {
        res.status(500).send({ message: "New user creation failed" });
      });
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res, next) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
