// ## 6. Mini Project: Student Management System

// ### Scenario:
// Build a small student management system using what you have learned.

// ### Requirements:

// Create an enum GradeLevel with: Freshman, Sophomore, Junior, Senior.

// Create an interface Student with:

// name

// age

// gradeLevel (enum)

// subjects (tuple of [subjectName, score])

// Create a class Report that:

// Has a private array of students.

// Has a method addStudent() to add a new student.

// Has a method printReport() to display all student information.

// ### Instructions:

// Use all the concepts from this week.

// Focus on correct typing and structure.

// Keep your code organized and readable.

enum GradeLevel {
    Freshman,
    Sophomore,
    Junior,
    Senior
}

// Each subject is a tuple: [subjectName, score]
type Subjects = [string, number][];

interface Student {
    name: string;
    age: number;
    gradeLevel: GradeLevel;
    subjects: Subjects;
}

class Report {
    private Students: Student[];

    constructor(Students: Student[] = []) {
        this.Students = Students;
    }

    addStudent(newStudent: Student) {
        this.Students.push(newStudent);
    }

    printReport() {
        console.log("------ STUDENT REPORT ------");

        this.Students.forEach((stud, index) => {
            console.log(`\nStudent #${index + 1}`);
            console.log(`Name: ${stud.name}`);
            console.log(`Age: ${stud.age}`);
            console.log(`Grade Level: ${GradeLevel[stud.gradeLevel]}`);
            console.log("Subjects:");

            stud.subjects.forEach(([subjectName, score]) => {
                console.log(`   - ${subjectName}: ${score}`);
            });
        });
    }
}


// ---- Example usage ----
const report = new Report();

report.addStudent({
    name: "Divine",
    age: 18,
    gradeLevel: GradeLevel.Senior,
    subjects: [
        ["Math", 95],
        ["English", 88]
    ]
});

report.addStudent({
    name: "Sarah",
    age: 17,
    gradeLevel: GradeLevel.Junior,
    subjects: [
        ["Biology", 90],
        ["Chemistry", 85]
    ]
});

report.printReport();
