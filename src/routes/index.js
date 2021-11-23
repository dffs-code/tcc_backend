const user = require("./userRouter");
const teacher = require("./teacherRouter");
const student = require("./studentRouter");
const subject = require("./subjectRouter");
const request = require("./requestRouter");
const qualification = require("./qualificationRouter");
const category = require("./categoryRouter");
const card = require("./cardRouter");
const rating = require("./ratingRouter");
const s3 = require("./s3UploadImageRouter");

module.exports = (app) => {
  app.use(
    user,
    teacher,
    student,
    subject,
    qualification,
    card,
    request,
    rating,
    category,
    s3,
  );
};
