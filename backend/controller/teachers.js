const Teachers = require("../models/Teachers");
const asyncHandler = require("../middleware/asyncHandler");

exports.getTeachers = async (req, res, next) => {
  try {
    const Teacher = await Teachers.find();
    res.send({ success: true, data: Teacher });
  } catch (err) {
    next(err);
  }
};
exports.getTeacher = asyncHandler(async (req, res, next) => {
  const Teacher = await Teachers.findById(req.params.id);
  if (!Teacher) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }

  res.send({ success: true, data: Teacher });
});
exports.postTeachers = asyncHandler(async (req, res, next) => {
  const Teacher = await Teachers.create(req.body);
  res.send({
    success: true,
    data: Teacher,
  });
});

exports.updateTeacher = asyncHandler(async (req, res, next) => {
  const Teacher = await Teachers.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!Teacher) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }
  res.send({ success: true, data: Teacher });
});

exports.deleteTeacher = asyncHandler(async (req, res, next) => {
  const Teacher = await Teachers.findByIdAndDelete(req.params.id);
  if (!Teacher) {
    res.send({
      success: false,
      Error: `${req.params.id} ID-тай хэрэглэгч байхгүй байна.`,
    });
  }
  res.send({ success: true, data: Teacher });
});
