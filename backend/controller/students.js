const Students = require("../models/Students");
const asyncHandler = require("../middleware/asyncHandler");

exports.getStudents = async (req, res, next) => {
  try {
    const Student = await Students.find();
    res.send({ success: true, data: Student });
  } catch (err) {
    next(err);
  }
};
exports.getStudent = asyncHandler(async (req, res, next) => {
  const Student = await Students.findById(req.params.id);
  if (!Student) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }

  res.send({ success: true, data: Student });
});
exports.postStudents = asyncHandler(async (req, res, next) => {
  const Student = await Students.create(req.body);
  res.send({
    success: true,
    data: Student,
  });
});

exports.updateStudent = asyncHandler(async (req, res, next) => {
  const Student = await Students.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!Student) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }
  res.send({ success: true, data: Student });
});

exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const Student = await Students.findByIdAndDelete(req.params.id);
  if (!Student) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }
  res.send({ success: true, data: Student });
});
