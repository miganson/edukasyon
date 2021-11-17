const parseData = (body) => {
	const lines = body.grades.split("\n");
	let currentQuarter = 0;

	let students = [];

	const getStudent = (firstName, lastName) => {
		let studentGet = null;
		students.forEach((student) => {
			if (student.firstName === firstName && student.lastName === lastName) {
				studentGet = student;
			}
		});
		return studentGet;
	};

	lines.forEach((line, index) => {
		const data = line.split(" ");
		//Check if its a Quarter header and get current Quarter
		if (data[0] === "Quarter" && !isNaN(data[1])) {
			currentQuarter = parseInt(data[1]);
		}

		//Check if its a grade line
		else if (isNaN(data[0]) && isNaN(data[1])) {
			const firstName = data[0];
			const lastName = data[1];

			let student = getStudent(firstName, lastName);
			if (!student) {
				let newStudent = {};
				newStudent.firstName = firstName;
				newStudent.lastName = lastName;
				newStudent.grades = {
					quarter1: {
						homework: [],
						testGrades: [],
					},
					quarter2: {
						homework: [],
						testGrades: [],
					},
					quarter3: {
						homework: [],
						testGrades: [],
					},
					quarter4: {
						homework: [],
						testGrades: [],
					},
				};
				student = newStudent;
				students.push(newStudent);
			}

			//Parse the rest of the grades
			let isHomework = false;
			for (i = 2; i < data.length; i++) {
				if (data[i] === "T") {
					isHomework = false;
				} else if (data[i] === "H") {
					isHomework = true;
				} else if (!isNaN(data[i])) {
					if (isHomework) {
						student.grades["quarter" + currentQuarter].homework.push(
							parseInt(data[i])
						);
					} else {
						student.grades["quarter" + currentQuarter].testGrades.push(
							parseInt(data[i])
						);
					}
				}
			}
		}
	});
	return students;
};

module.exports = parseData;
