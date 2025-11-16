// Session 2 - Task 1
// Topic: Type Alias and Function
// Description: Create a type alias for EmployeeID and return formatted string.
// 

// Type alias for employee ID
type EmployeeID = string | number;


function NNPC(id: EmployeeID): string {
  return `Employee ID: E${id}`;
}

console.log(NNPC("1234")); 
console.log(NNPC(5678));   