// ## 1. Type Alias and Function

// ### Scenario:
// You are creating an employee record system.
// Define a type alias for an employee ID that can be either a string or number.
// Write a function that takes this ID and returns a formatted string like:

// Employee ID: E1234


// ### Instructions:

// Use a type alias for the ID.

// Add proper types to the function parameter and return value.

// Use template literals instead of string concatenation.

type employeeId  = string | number;

function Google (id:employeeId): string {
    return `Employee ID: E${id}`
}

console.log(Google(1234))