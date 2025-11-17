enum StudentGrade{
    freshman = 'Freshman',
    sophomore = 'Sophomore',
    junior = 'Junior',
    senior = 'Senior'
}
interface Student {
    name: string;
    age: number;
    gradeLevel:StudentGrade;
    subjects: [subjectName: string, score:number][];
}
class Report {
    constructor(
        private students: Student[] = []
    ) {}

    addStudent(student: Student): void {
        this.students.push(student);
    }

    printReport(): void {
        console.log('--- Student Report ---');
        this.students.forEach((student, index) => {
            console.log(`${index + 1}. ${student.name}`);
            console.log(`   Age: ${student.age}`);
            console.log(`   Grade Level: ${student.gradeLevel}`);
            console.log('   Subjects:');
            student.subjects.forEach(([subjectName, score]) => {
                console.log(`     - ${subjectName}: ${score}`);
            });
        });
    }
}