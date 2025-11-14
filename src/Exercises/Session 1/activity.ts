// Hehe yes it's empty you have to fill it with your solutions
// Hehe yes it's empty you have to fill it with your solutions
// ============================================================
// CLASS ACTIVITY: CONVERT THIS JAVASCRIPT CODE TO TYPESCRIPT
// ============================================================

// 1 STRINGS
// Convert this simple greeting to TypeScript and add proper types.
// let firstName :string= "Faith";
// let lastName :string= "Adeyemi";
// let fullName:string = firstName + " " + lastName;
// console.log("Hello, " + fullName + "!");

// Write your solution below this line

let firstName :string= "Faith";
let lastName :string= "Adeyemi";
let fullName:string = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");
// 2 NUMBERS
// Add types for the variables and ensure totalPrice is a number.
// let price:number = 1500;
// let quantity:number = 3;
// let totalPrice:number = price * quantity;
// console.log("Total Price:", totalPrice);

// Write your solution below this line
let price:number = 1500;
let quantity:number = 3;
let totalPrice:number = price * quantity;
console.log("Total Price:", totalPrice);

// 3 BOOLEAN
// Add types for the boolean variable and make it type-safe.
// let isAvailable:boolean  = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }


// Write your solution below this line
let isAvailable:boolean  = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}
// 4 UNION TYPE
// This function should accept either a string or a number as 'id'.
// Add a union type for the parameter and ensure type safety.
// ignore the any type error here
// let id : (string |number) []=["john", 20]
// function printId(id: string | number) {
//   console.log(`User id is ${id}`);
// }
// printId(101);
// printId("abc123");

// Write your solution below this line
function printId(id: string | number) {
  console.log(`User id is ${id}`);
}
printId(101);
printId("abc123");

// 5 ARRAYS
// Convert this to TypeScript using proper array types.
// let studentNames= ["Ada", "Bola", "Chinedu"];
// let scores = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);

// Write your solution below this line
let studentNames:string[] = ["Ada", "Bola", "Chinedu"];
let scores : number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);
// console.log(`my name is ${studentNames[0]} and my score is ${scores[0]}` )
// console.log(`my name is ${studentNames[1]} and my score is ${scores[1]}` )
// console.log(`my name is ${studentNames[2]} and my score is ${scores[2]}` )

// 6 INT:(ERSECTION TYPE
// Combine two objects into one using intersection types in TypeScript.
// let user={
//   name: "Emmanuel",
//   email: "emma@example.com",
// };

// let account = {
//   accountNumber: "AC12345",
//   balance: 5000,
// };

// Write your solution below this line
let user : {name:string , email:string} ={
    name:"emmanuel",
    email:"danielenyia354@gmail.com"
}

let account:{
    accountNumber:string, 
    balance:number} ={
    accountNumber:"ACWE12344",
    balance:76500
}
let costumer :{name: string, 
    email:string, 
    accountNumber:string, 
    balance:number,
 } ={...user, ...account}
console.log(costumer)

// In TypeScript, you'll create two types (User and Account)
// and then combine them into a single variable called `customer`
// that includes properties from both.


