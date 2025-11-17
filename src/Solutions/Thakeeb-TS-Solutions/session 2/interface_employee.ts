interface Person {
    name: string;
    age: number;
}
interface Employee extends Person {
    employeeId: string;
    department: string;
    salary: number;
}
let person: Person ={
    name:"Muhammad Thakeeb Muhammad",
    age: 26,
};
let employee: Employee = {
    name:"Muhammad Thakeeb Muhammad",
    age: 26,
    employeeId: "ENG/18/COM/00040",
    department: "Computer Engineering",
    salary: 80000
}
type PersonInfo = Person & Employee;
let info: PersonInfo = {
    name:person.name,
    age: person.age,
    employeeId: employee.employeeId,
    department: employee.department,
    salary: employee.salary
};
console.log(`Name: ${employee.name}, Age: ${employee.age}, Employee ID: ${employee.employeeId}, Dept: ${employee.department}, Salary: $${employee.salary}`);