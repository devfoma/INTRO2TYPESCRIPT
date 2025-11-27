// Mini Project Student Report
var GradeLevel;
(function (GradeLevel) {
    GradeLevel[GradeLevel["Freshman"] = 0] = "Freshman";
    GradeLevel[GradeLevel["Sophomore"] = 1] = "Sophomore";
    GradeLevel[GradeLevel["Junior"] = 2] = "Junior";
    GradeLevel[GradeLevel["Senior"] = 3] = "Senior";
})(GradeLevel || (GradeLevel = {}));
var Report = /** @class */ (function () {
    function Report() {
        this.students = [];
    }
    Report.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Report.prototype.printReport = function () {
        console.log("===== Student Report =====");
        this.students.forEach(function (student) {
            console.log("".concat(student.name, ", Age: ").concat(student.age, ", Level: ").concat(student.gradeLevel, ", Subject: ").concat(student.subjects[0], ", Score: ").concat(student.subjects[1]));
        });
    };
    return Report;
}());
var report = new Report();
report.addStudent({
    name: "John Smith",
    age: 19,
    gradeLevel: GradeLevel.Freshman,
    subjects: ["Math", 85],
});
report.addStudent({
    name: "Mary Lee",
    age: 21,
    gradeLevel: GradeLevel.Junior,
    subjects: ["Physics", 92],
});
report.printReport();
/*
6. Mini Project: Student Management System

### Scenario:
Build a small student management system using what you have learned.

### Requirements:

Create an enum GradeLevel with: Freshman, Sophomore, Junior, Senior.

Create an interface Student with:

name

age

gradeLevel (enum)

subjects (tuple of [subjectName, score])

Create a class Report that:

Has a private array of students.

Has a method addStudent() to add a new student.

Has a method printReport() to display all student information.

### Instructions:

Use all the concepts from this week.

Focus on correct typing and structure.

Keep your code organized and readable.

*/ 
