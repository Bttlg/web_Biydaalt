const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
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
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    enum: ["student", "teacher"],
    default: "students",
  },
  lessons: [],
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

module.exports = mongoose.model("Users", UserSchema);
