// ## 4. Interfaces and Interface Inheritance

// ### Scenario:
// Create an interface Person with name and age.
// Then extend it to Employee, adding department and salary.
// Create an object that follows the Employee structure and log its properties.

// ### Instructions:

// Use extends for inheritance.

// Type the object properly, do not use any.

// Use template literals to display the details.

interface Person {
    name : string,
    age: number
};

interface Employee extends Person {
    department: string,
    salary: number
};

const worker: Employee = {
    name: 'Zack',
    age: 25,
    department: 'accounting',
    salary: 3_000
}

const workerDetails = `${worker.name} is aged ${worker.age} and is in the ${worker.department} department, earning $${worker.salary} per month`;
console.log(workerDetails);
