const express = require("express");

const {
  getUsers,
  getUser,
  postUsers,
  updateUser,
  deleteUser,
} = require("../controller/users");

const router = express.Router();

router.route("/").get(getUsers).post(postUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
