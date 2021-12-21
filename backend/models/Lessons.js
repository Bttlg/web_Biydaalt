const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    unique: true,
  },
  lessonIndex: {
    type: String,
    unique: true,
  },
  credit: {
    type: String,
  },
});

module.exports = mongoose.model("lessons", LessonSchema);
