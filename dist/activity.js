"use strict";
// CLASS ACTIVITY: CONVERT THIS JAVASCRIPT CODE TO TYPESCRIPT
Object.defineProperty(exports, "__esModule", { value: true });
// 1 STRINGS
// Convert this simple greeting to TypeScript and add proper types.
// let firstName = "Faith";
// let lastName = "Adeyemi";
// let fullName = firstName + " " + lastName;
// console.log("Hello, " + fullName + "!");
// Write your solution below this line
let firstname = "Muhammad Thakeeb";
let lastName = "Muhammad";
let fullName = firstname + " " + lastName;
console.log(`Hello, ${fullName}  !`);

// Write your solution below this line
let firstname: string = "Muhammad Thakeeb";
let lastName: string = "Muhammad";
let fullName: string = firstname + " " + lastName;
console.log(`Hello, ${fullName}  !`);


// 2 NUMBERS
// Add types for the variables and ensure totalPrice is a number.
// let price = 1500;
// let quantity = 3;
// let totalPrice = price * quantity;
// console.log("Total Price:", totalPrice);
// Write your solution below this line
let price = 1500;
let quantity = 3;
let totalPrice = price * quantity;
console.log(`Total Price: ${totalPrice}`);

// Write your solution below this line
let price: number = 1500;
let quantity: number = 3;
let totalPrice: number = price * quantity;
console.log(`Total Price: ${totalPrice}`);

// 3 BOOLEAN
// Add types for the boolean variable and make it type-safe.
// let isAvailable = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }
// Write your solution below this line
let isAvailable = true;
// Write your solution below this line
let isAvailable = true;

// Write your solution below this line
let isAvailable: boolean = true;
if (isAvailable) {
    console.log("Item is available for purchase.");
}
else {
    console.log("Item is out of stock.");
}

// 4 UNION TYPE
// This function should accept either a string or a number as 'id'.
// Add a union type for the parameter and ensure type safety.
// ignore the any type error here
// function printId(id) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");
// Write your solution below this line
function printId(id) {
    console.log(`User ID is: ${id}`);
}
printId(101);
printId("abc123");

// Write your solution below this line
function printId(id: number | string) {
  console.log(`User ID is: ${id}`);
}
printId(101);
printId("abc123");

// 5 ARRAYS
// Convert this to TypeScript using proper array types.
// let studentNames = ["Ada", "Bola", "Chinedu"];
// let scores = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);
// Write your solution below this line
let studentNames = ["Ada", "Bola", "Chinedu"];
let scores = [90, 75, 88];
console.log(studentNames);
console.log(scores);

// Write your solution below this line
let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);

// 6 INTERSECTION TYPE
// Combine two objects into one using intersection types in TypeScript.
let user = {
    name: "Emmanuel",
    email: "emma@example.com",
};
let account = {
    accountNumber: "AC12345",
    balance: 5000,
};
// In TypeScript, you'll create two types (User and Account)
// and then combine them into a single variable called `customer`
// that includes properties from both.
const Customer = {
    name: "Muhammad",
    email: "thakeebmuhammad@gmail.com",
    accountNumber: "ABC12345",
    balance: 5000,
};
console.log(Customer);
//# sourceMappingURL=activity.js.map
//# sourceMappingURL=activity.js.map

// Write your solution below this line
type user = {
  name: string;
  email: string;
};
type account = {
  accountNumber: string;
  balance: number;
};
type customer = user & account;

// In TypeScript, you'll create two types (User and Account)
// and then combine them into a single variable called `customer`
// that includes properties from both.
const Customer: customer = {
  name: "Muhammad",
  email: "thakeebmuhammad@gmail.com",
  accountNumber: "ABC12345",
  balance: 5000,
};
console.log(Customer);
