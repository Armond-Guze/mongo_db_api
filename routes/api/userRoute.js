const router = require("express").Router();

const { getAllUsers, postUser } = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(postUser);

module.exports = router;
