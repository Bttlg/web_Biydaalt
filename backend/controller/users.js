const Users = require("../models/Users");

exports.getUsers = async (req, res, next) => {
  try {
    const User = await Users.find();
    res.send({ success: true, data: User });
  } catch (err) {
    res.send({
      success: false,
      Error: err,
    });
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const User = await Users.findById(req.params.id);
    if (User === null) {
      res.send({
        success: false,
        Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
      });
    } else {
      res.send({ success: true, data: User });
    }
  } catch (err) {
    res.send({
      success: false,
      Error: err,
    });
  }
};
exports.postUsers = async (req, res, next) => {
  console.log(req.body);
  try {
    const User = await Users.create(req.body);
    res.send({
      success: true,
      data: User,
    });
  } catch (err) {
    res.send({
      success: false,
      Error: err,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const User = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (User === null) {
      res.send({
        success: false,
        Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
      });
    } else {
      res.send({ success: true, data: User });
    }
  } catch (err) {
    res.send({
      success: false,
      Error: err,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const User = await Users.findByIdAndDelete(req.params.id);
    if (User === null) {
      res.send({
        success: false,
        Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
      });
    } else {
      res.send({ success: true, data: User });
    }
  } catch (err) {
    res.send({
      success: false,
      Error: err,
    });
  }
};
