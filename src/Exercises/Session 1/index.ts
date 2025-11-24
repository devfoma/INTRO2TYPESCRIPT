// Hehe yes it's empty you have to fill it with your solutions

//  1 STRINGS
//  Convert this simple greeting to TypeScript and add proper types.

//  let firstName = "Faith";
//  let lastName = "Adeyemi";
//  let fullName = firstName + " " + lastName;
//  console.log("Hello, " + fullName + "!");

// // Write your solution below this line
 
  let firstName: string = "Faith";
  let lastName:string = "Adeyemi";
  let fullName = firstName + " " + lastName;
 console.log("Hello, " + fullName + "!");

// // 2 NUMBERS
// // Add types for the variables and ensure totalPrice is a number.
// let price = 1500;
// let quantity = 3;
// let totalPrice = price * quantity;
// console.log("Total Price:", totalPrice);

// // Write your solution below this line
 let price: number = 1500;
let quantity: number = 3;
let totalPrice = price * quantity;
console.log("Total Price:", totalPrice);

// // 3 BOOLEAN
// // Add types for the boolean variable and make it type-safe.
// let isAvailable = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }


// Write your solution below this line

 let isAvailable:boolean = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}


// 4 UNION TYPE
// This function should accept either a string or a number as 'id'.
// Add a union type for the parameter and ensure type safety.
// function printId(id) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");
// printId(true); // This should cause a type error in TypeScript

// Write your solution below this line

function printId(id: string | number) {
  console.log("User ID is:", id);
}
printId(101);
printId("abc123");

// // 5 ARRAYS
// // Convert this to TypeScript using proper array types.
// let studentNames = ["Ada", "Bola", "Chinedu"];
// let scores = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);

// // Write your solution below this line

let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);

// 6 INTERSECTION TYPE
// Combine two objects into one using intersection types in TypeScript.
// let user = {
//   name: "Emmanuel",
//   email: "emma@example.com",
// };

// let account = {
//   accountNumber: "AC12345",
//   balance: 5000,
// };

// Write your solution below this line

type user = {
    name: string;
    email: string;
};
type account = {
    accountNumber: string;
    balance: number;
};
let user: user = {
  name: "Emmanuel",
  email: "emma@example.com",
};

let account: account = {
  accountNumber:  "AC12345",
  balance: 5000,
};
let customer = { ...user, ...account };
console.log(customer);


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
