const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
