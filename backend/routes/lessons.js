const express = require("express");

const {
  getLessons,
  getLesson,
  postLessons,
  updateLesson,
  deleteLesson,
} = require("../controller/lessons");

const router = express.Router();

router.route("/").get(getLessons).post(postLessons);
router.route("/:id").get(getLesson).put(updateLesson).delete(deleteLesson);

module.exports = router;
