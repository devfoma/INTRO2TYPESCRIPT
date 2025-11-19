enum GradeLevel {
    Freshman,
    Sophomore,
    Junior, 
    Senior,
}


interface Student{
    name: string,
    age: number,
    gradeLevel: GradeLevel, 
    Subjects: [string, number],
}

class report {
    private students: string[] = []

    public addStudent(student: string): void{
        this.students.push(student);
    }

    public printReport(): void{
        console.log(this.students)
    }
}
const theReport = new report()