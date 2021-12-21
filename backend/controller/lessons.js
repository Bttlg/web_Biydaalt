const Lessons = require("../models/Lessons");
const asyncHandler = require("../middleware/asyncHandler");

exports.getLessons = asyncHandler(async (req, res, next) => {
  try {
    const Lesson = await Lessons.find();
    res.send({ success: true, data: Lesson });
  } catch (err) {
    next(err);
  }
});

exports.getLesson = asyncHandler(async (req, res, next) => {
  try {
    const Lesson = await Lessons.findById(req.params.id);
    if (!Lesson) {
      res.send({
        success: false,
        Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
      });
    }

    res.send({ success: true, data: Lesson });
  } catch (err) {
    next(err);
  }
});

exports.postLessons = asyncHandler(async (req, res, next) => {
  try {
    const Lesson = await Lessons.create(req.body);
    res.send({ success: true, data: Lesson });
  } catch (err) {
    next(err);
  }
});

exports.updateLesson = asyncHandler(async (req, res, next) => {
  try {
    const Lesson = await Lessons.findByIdAndUpdate(req.params.id);
    if (!Lesson) {
      res.send({
        success: false,
        Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
      });
    }

    res.send({ success: true, data: Lesson });
  } catch (err) {
    next(err);
  }
});

exports.deleteLesson = asyncHandler(async (req, res, next) => {
  try {
    const Lesson = await Lessons.findByIdAndDelete(req.params.id);
    if (!Lesson) {
      res.send({
        success: false,
        Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
      });
    }

    res.send({ success: true, data: Lesson });
  } catch (err) {
    next(err);
  }
});
