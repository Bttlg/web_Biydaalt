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
  school: {
    type: String,
  },
  tuwshin: {
    type: String,
  },
  lecture: {
    type: String,
  },
  seminar: {
    type: String,
  },
  yronhiiTolow: {
    type: String,
  },
  huwaariTolow: {
    type: String,
  },
  uliral: {
    type: String,
  },
  zorilgo: {
    type: String,
  },
  aguulga: {
    type: String,
  },
  medleg: {
    type: String,
  },
  nomzui: {
    type: String,
  },
});

module.exports = mongoose.model("lessons", LessonSchema);
