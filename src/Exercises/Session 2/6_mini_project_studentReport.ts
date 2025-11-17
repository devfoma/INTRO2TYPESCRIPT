
// 6. MINI PROJECT — STUDENT MANAGEMENT SYSTEM

// 1. Grade level enum
enum GradeLevel {
    Freshman = "FRESHMAN",
    Sophomore = "SOPHOMORE",
    Junior = "JUNIOR",
    Senior = "SENIOR"
}

// 2. Student interface
interface Student {
    name: string;
    age: number;
    gradeLevel: GradeLevel;
    subjects: [string, number]; // tuple: [subjectName, score]
}

// 3. Report class
class Report {
    private students: Student[] = [];

    // Method to add a new student
    addStudent(student: Student): void {
        this.students.push(student);
    }

    // Method to print full report
    printReport(): void {
        console.log("===== STUDENT REPORT =====\n");

        this.students.forEach((student, index) => {
            console.log(`Student #${index + 1}`);
            console.log(`Name: ${student.name}`);
            console.log(`Age: ${student.age}`);
            console.log(`Grade Level: ${student.gradeLevel}`);
            console.log(`Subject: ${student.subjects[0]}`);
            console.log(`Score: ${student.subjects[1]}\n`);
        });
    }
}

// Example Usage
const report = new Report();

report.addStudent({
    name: "Alice Johnson",
    age: 18,
    gradeLevel: GradeLevel.Freshman,
    subjects: ["Mathematics", 92],
});

report.addStudent({
    name: "Michael Smith",
    age: 20,
    gradeLevel: GradeLevel.Junior,
    subjects: ["Physics", 85],
});

// Print the full report
report.printReport();
