
// 1. TYPE ALIAS AND FUNCTION


// A type alias that allows employee ID to be a string or number
type EmployeeID = string | number;

// A function that returns a formatted employee ID
function formatEmployeeID(id: EmployeeID): string {
    return `Employee ID: ${id}`;
}

// Example test
const emp1 = formatEmployeeID("E1234");
const emp2 = formatEmployeeID(5678);

console.log(emp1);  // Employee ID: E1234
console.log(emp2);  // Employee ID: 5678
