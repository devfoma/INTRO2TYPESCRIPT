// // ============================================================
// // CLASS ACTIVITY: CONVERT THIS JAVASCRIPT CODE TO TYPESCRIPT
// // ============================================================

//  1 STRINGS
//  Convert this simple greeting to TypeScript and add proper types.

// let firstName = "Faith";
// let lastName = "Adeyemi";
// let fullName = firstName + " " + lastName;
// console.log("Hello, " + fullName + "!");

// // Write your solution below this line
// solutions
// let firstName: string = "okorie";
// let lastName: string = "chigozie";
// let fullName: string = firstName + " " + lastName;
// console.log("Hello, " + fullName + "!");

// // 2 NUMBERS
// // Add types for the variables and ensure totalPrice is a number.
// let price = 1500;
// let quantity = 3;
// let totalPrice = price * quantity;
// console.log("Total Price:", totalPrice);

// // Write your solution below this line
// solutions
// let price: number = 1500;
// let quantity: number = 3;
// let totalPrice: number = price * quantity;
// console.log("Total Price:", totalPrice);

// // 3 BOOLEAN
// // Add types for the boolean variable and make it type-safe.
// let isAvailable = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }

// Write your solution below this line
// solutions

// let isAvailable: boolean = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }

// 4 UNION TYPE
// This function should accept either a string or a number as 'id'.
// Add a union type for the parameter and ensure type safety.
// ignore the any type error here
// function printId(id) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");
// printId(true);
// This should cause a type error in TypeScript

// Write your solution below this line
// solutions
// //
// function printId(id: string | number | boolean) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");
// printId(true);

// // 5 ARRAYS
// // Convert this to TypeScript using proper array types.
// let studentNames = ["Ada", "Bola", "Chinedu"];
// let scores = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);

// // Write your solution below this line
// solutions

// let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
// let scores: number[] = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);

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
//
// In TypeScript, you'll create two types (User and Account)
// and then combine them into a single variable called `customer`
// that includes properties from both.
// let customer = { ...user, ...account };
// console.log(customer);
// 7

// function calculateTax(income, taxYear) {
//   if (taxYear < 2025) {
//     return (income / 100) * 1.2;
//   } else {
//     return (income / 100) * 1.4;
//   }
// }

// let tax = calculateTax(5_000_000_000, 2030);

// console.log("Tax is:", tax);
// //7 solution

// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2025) {
//     return (income / 100) * 1.2;
//   } else {
//     return (income / 100) * 1.4;
//   }
// }

// let tax: number = calculateTax(5_000_000_000, 2030);

// console.log("Tax is:", tax);
