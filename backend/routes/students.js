const express = require("express");

const {
  getStudents,
  getStudent,
  postStudents,
  updateStudent,
  deleteStudent,
} = require("../controller/students");

const router = express.Router();

router.route("/").get(getStudents).post(postStudents);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
