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
    select: false,
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

UserSchema.pre("save", async function () {
  const saltPassword = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, saltPassword);
});

module.exports = mongoose.model("Users", UserSchema);
