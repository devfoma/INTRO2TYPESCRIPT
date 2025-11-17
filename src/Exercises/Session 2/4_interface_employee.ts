
// 4. INTERFACES AND INTERFACE INHERITANCE

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    department: string;
    salary: number;
}

const employee1: Employee = {
    name: "John Doe",
    age: 30,
    department: "Finance",
    salary: 250000
};

console.log(`
Employee Details:
Name: ${employee1.name}
Age: ${employee1.age}
Department: ${employee1.department}
Salary: ₦${employee1.salary}
`);
