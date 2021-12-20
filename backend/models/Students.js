const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const StudentsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: "true",
  },
  hotolbor: {
    type: String,
    required: true,
  },
  tolowlogoo: {
    type: String,
  },
  tolow: {
    type: String,
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  school: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["student", "teacher"],
    default: "student",
  },
  resetPasswordToken: {
    String,
    resetPasswordExpire: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Password hash
// UserSchema.pre("save", async function () {
//   const saltPassword = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, saltPassword);
// });

module.exports = mongoose.model("Students", StudentsSchema);
