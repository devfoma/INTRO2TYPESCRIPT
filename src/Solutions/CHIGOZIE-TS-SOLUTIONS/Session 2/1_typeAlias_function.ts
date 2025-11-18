// my solution
type EmployeeID = number | string;

function writeEmployeeID(id: EmployeeID): string {
  return `Employee ID: E${id}`;
}

console.log(writeEmployeeID("1234"));
console.log(writeEmployeeID("2025"));
