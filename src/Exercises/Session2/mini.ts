// Mini Project Student Report

enum GradeLevel {
  Freshman,
  Sophomore,
  Junior,
  Senior,
}

interface Student {
  name: string;
  age: number;
  gradeLevel: GradeLevel;
  subjects: [string, number]; // subjectName, score
}

class Report {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  printReport(): void {
    console.log("===== Student Report =====");
    this.students.forEach((student) => {
      console.log(
        `${student.name}, Age: ${student.age}, Level: ${student.gradeLevel}, Subject: ${student.subjects[0]}, Score: ${student.subjects[1]}`
      );
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