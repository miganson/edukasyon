const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const StudentSchema = new Schema({
	firstName: String,
	lastName: String,
	grades: {
		quarter1: {
			homework: [Number],
			testGrades: [Number],
		},
		quarter2: {
			homework: [Number],
			testGrades: [Number],
		},
		quarter3: {
			homework: [Number],
			testGrades: [Number],
		},
		quarter4: {
			homework: [Number],
			testGrades: [Number],
		},
	},
});

// Create model for todo
const Student = mongoose.model("student", StudentSchema);

module.exports = Student;
