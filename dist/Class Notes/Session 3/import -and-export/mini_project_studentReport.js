// Session 2 - Task 6
//  Topic: Mini Project - Student Management System
//  Description: Use enums, interfaces, classes, tuples, and access modifiers.
var GradeLevel;
(function (GradeLevel) {
    GradeLevel["Freshman"] = "Freshman";
    GradeLevel["Sophomore"] = "Sophomore";
    GradeLevel["Junior"] = "Junior";
    GradeLevel["Senior"] = "Senior";
})(GradeLevel || (GradeLevel = {}));
class Report {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    printReport() {
        console.log("=== Student Report ===");
        this.students.forEach((s) => {
            console.log(`${s.name}, Age: ${s.age}, Level: ${s.gradeLevel}, Subject: ${s.subjects[0]}, Score: ${s.subjects[1]}`);
        });
    }
}
const report = new Report();
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
export {};
//# sourceMappingURL=mini_project_studentReport.js.map