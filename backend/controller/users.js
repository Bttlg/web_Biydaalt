const Users = require("../models/Users");
const asyncHandler = require("../middleware/asyncHandler");

exports.getUsers = async (req, res, next) => {
  try {
    const User = await Users.find();
    res.send({ success: true, data: User });
  } catch (err) {
    next(err);
  }
};
exports.getUser = asyncHandler(async (req, res, next) => {
  const User = await Users.findById(req.params.id);
  if (!User) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }

  res.send({ success: true, data: User });
});
exports.postUsers = asyncHandler(async (req, res, next) => {
  const User = await Users.create(req.body);
  res.send({
    success: true,
    data: User,
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const User = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!User) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }
  res.send({ success: true, data: User });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const User = await Users.findByIdAndDelete(req.params.id);
  if (!User) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }
  res.send({ success: true, data: User });
});
