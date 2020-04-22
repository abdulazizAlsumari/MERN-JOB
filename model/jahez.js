const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  typeOfFood: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Jahez", EmployeeSchema);
