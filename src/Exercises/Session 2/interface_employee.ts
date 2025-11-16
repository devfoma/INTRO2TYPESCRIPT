// ## 4. Interfaces and Interface Inheritance

// ### Scenario:
// Create an interface Person with name and age.
// Then extend it to Employee, adding department and salary.
// Create an object that follows the Employee structure and log its properties.

// ### Instructions:

// Use extends for inheritance.

// Type the object properly, do not use any.

// Use template literals to display the details.

interface person {
    name: string
    age: number
}
interface employee extends person{
    department: string,
    salary: number
}
let employee: employee ={
    name:"afo",
    age: 20,
    department: "media",
    salary: 75_000
}

console.log(`Employee info: My name is ${employee.name} ${employee.age} years old in ${employee.department} department, i earn ${employee.salary}`)