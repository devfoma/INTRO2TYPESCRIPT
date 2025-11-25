// Hehe yes it's empty you have to fill it with your solutions

// type EmployeeId="string"
// let EmployeeId="Mekjah"

// function EmployeeName(Id:string): string | number {
//        if (EmployeeId==="Mekjah"){
//         return"Employee Id: E1234";
//         } else {
//     return "sorry, you are not an employee";}
// }
// console.log(EmployeeName("Mekjah"));

type EmployeeId = string | number;

function getEmployeeId(id: EmployeeId): string {
  return `Employee ID: ${id}`;
}

console.log(getEmployeeId("E1234"));
console.log(getEmployeeId(5678));
