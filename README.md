
# Backend code
This readme will specify how each route will operate

## How to run using source code from git
Node must be installed to run the backend (atleast stable version)
1. Clone repo from https://github.com/miganson/edukasyon
2. run npm install 
3. run node index.js

## Model
This is the model used in the database and how the data is stored per student.

    const  StudentSchema  =  new  Schema({
    	firstName:  String,
    	lastName:  String,
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

## Retrieve list of all students
To get a list of all students, 

> GET /students

This will retrieve all the students that are currently stored inside the database along with their respective grades in both homework and test grades per quarter.

## Retrieve student grade
To get the list of grades of a specific student, 

> GET /student/:id

This will retrieve the grades of a single student in both homework and test grades per quarter.

## Clear all grades
To clear all the grades in the database, 

> GET /clear

This will clear all currently stored data inside the database. The data consists of the grades per quarter per student.

## Add student grades
To add grades per student in the database based on the provided data from the front end, 

> POST /students

This will add to the database the provided grades per quarter per student
