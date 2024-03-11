const User = require("../models");

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((userData = res.json("user created")))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  postUser(req, res) {
    User.findById({ _id: req.params.userId })
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
};
