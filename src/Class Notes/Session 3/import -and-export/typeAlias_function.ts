// Session 2 - Task 1
// Topic: Type Alias and Function
// Description: Create a type alias for EmployeeID and return formatted string.
// 

// Type alias for employee ID
export type EmployeeID = string | number;


function formatEmployeeID(id: EmployeeID): string {
  return `Employee ID: E${id}`;
}

console.log(formatEmployeeID("1234")); 
console.log(formatEmployeeID(5678));   
