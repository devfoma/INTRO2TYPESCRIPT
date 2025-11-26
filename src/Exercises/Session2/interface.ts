interface Person {
    name: string,
    age: number
}

interface Employee extends Person {
    department: string,
    salary: number
}

let person: Employee = {
    name: "Wisdom Okereke",
    age: 58,
    department: "IT",
    salary: 59_000_000
}

console.log(`Employee Details: (name: ${person.name}, age: ${person.age}, department: ${person.department}, salary: ${person.salary})`);

/*
4. Interfaces and Interface Inheritance

### Scenario:
Create an interface Person with name and age.
Then extend it to Employee, adding department and salary.
Create an object that follows the Employee structure and log its properties.

### Instructions:

Use extends for inheritance.

Type the object properly, do not use any.

Use template literals to display the details.
*/

// interface User {
//     name: string,
//     email: string,
//     phone: string
// }

// interface Account {
//     accNo: string,
//     balance: number
// }

// let user: User = {
//     name: "Jackson",
//     email: "jackofalltrade@gmail.bia",
//     phone: "09000000000"
// }

// let account: Account = {
//     accNo: "AC0987",
//     balance: 70000
// }

// type Customer = User & Account;
// let customer: Customer = {...user, ...account};
// console.log(customer); 

// New Work
// interface Employee {
//     readonly id: number;
//     name: string,
//     salary: number
// }

// let employee: Employee = {
//     id : 123,
//     name: "John Obot",
//     salary: 500_000
// }

// interface Manager extends Employee {
//     department: string,
//     officeNo: number;
// }

// let manager: Manager = {
//     id: 2,
//     name: "Joseph Joseph Sunday",
//     salary: 3_000_000,
//     department: "Sales",
//     officeNo: 500
// }

// console.log(`Employee (name: ${employee.name}, Salary: ${employee.salary})`);
// console.log(`Manager: (Name | ${manager.name}, Salary | ${manager.salary}, department | ${manager.department})`);