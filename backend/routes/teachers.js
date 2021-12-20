const express = require("express");

const {
  getTeachers,
  getTeacher,
  postTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controller/teachers");

const router = express.Router();

router.route("/").get(getTeachers).post(postTeachers);
router.route("/:id").get(getTeacher).put(updateTeacher).delete(deleteTeacher);

module.exports = router;
