/*
Type Alias and Function

### Scenario:
You are creating an employee record system.
Define a type alias for an employee ID that can be either a string or number.
Write a function that takes this ID and returns a formatted string like:

Employee ID: E1234
*/
type EmployeeID = string | number;

function formatEmployeeID(id: EmployeeID): string {
  return `Employee ID: E${id}`;
}

console.log(formatEmployeeID("1234"));
console.log(formatEmployeeID(9987));
