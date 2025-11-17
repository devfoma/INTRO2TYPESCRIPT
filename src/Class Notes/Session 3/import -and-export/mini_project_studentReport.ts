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
    console.log("=== Student Report ===");
    this.students.forEach((s) => {
      console.log(
        `${s.name}, Age: ${s.age}, Level: ${s.gradeLevel}, Subject: ${s.subjects[0]}, Score: ${s.subjects[1]}`
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
