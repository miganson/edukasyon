const express = require("express");
const router = express.Router();
const Student = require("../models/student.js");
const parseData = require("../service/parseData.js");

router.get("/students", (req, res, next) => {
	Student.find({}, {})
		.then((data) => res.json(data))
		.catch(next);
});

router.get("/clear", (req, res, next) => {
	res.json(Student.collection.drop());
});

router.post("/students", (req, res, next) => {
	if (req.body && req.body !== "") {
		Student.collection.drop();
		const students = parseData(req.body);
		Student.create(students)
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: "Data must be provided",
		});
	}
});

router.get("/student/:id", (req, res, next) => {
	Student.findOne({ _id: req.params.id })
		.then((data) => res.json(data))
		.catch(next);
});

module.exports = router;
