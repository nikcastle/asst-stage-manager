const db = require("../models");

// Defining methods for the UserController
module.exports = {

  createUser: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbUser => console.log("create user", dbUser))
      .catch(err => res.status(422).json(err));
  },

  getUser: function (req, res) {
    db.Users
      .findOne({ id: req.params.id })
      .then(dbUser => {
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },

  findUsers: function (req, res) {
    db.Users
      .find({})
      .then(dbUser => console.log("find user", dbUser))
      .catch(err => res.status(422).json(err));
  },

  populateList: function (req, res) {

    db.Users.findOne({ id: req.params.id })
      .populate("groceryList")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err)
        res.json(err);
      });
  }

};
