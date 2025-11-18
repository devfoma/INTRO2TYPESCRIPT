// Session 2 - Task 6
//  Topic: Mini Project - Student Management System
//  Description: Use enums, interfaces, classes, tuples, and access modifiers.

enum GradeLevel {
  Freshman = "Freshman",
  Sophomore = "Sophomore",
  Junior = "Junior",
  Senior = "Senior",
}

interface Student {
  age: number;
  name: string;

  gradeLevel: GradeLevel;
  subjects: [string, number];
}

class studentReport {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  printReport(): void {
    console.log("=== Student Report ===");
    this.students.forEach((name) => {
      console.log(
        `${name.name}, Age: ${name.age}, Level: ${name.gradeLevel}, Subject: ${name.subjects[0]}, Score: ${name.subjects[1]}`
      );
    });
  }
}

const report = new studentReport();

report.addStudent({
  name: "chigozie okorie",
  age: 19,
  gradeLevel: GradeLevel.Freshman,
  subjects: ["Math", 90],
});

report.addStudent({
  name: "king wise",
  age: 19,
  gradeLevel: GradeLevel.Junior,
  subjects: ["cos101", 90],
});

report.addStudent({
  name: "neol joe",
  age: 19,
  gradeLevel: GradeLevel.Junior,
  subjects: ["stat", 92],
});

report.printReport();
