//  Session 2 - Task 4
//  Topic: Interfaces and Inheritance
// Description: Create Person and Employee interfaces.

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  department: string;
  salary: number;
}

const employee: Employee = {
  name: "Jane Doe",
  age: 29,
  department: "HR",
  salary: 65000,
};

console.log(
  `Employee Info: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: ₦${employee.salary}`
);
