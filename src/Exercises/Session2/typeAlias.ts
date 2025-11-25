type newType = string | number;

function callID(names: newType) {
  console.log(`Employee ID: ${names}`);
}

callID("chinedu87");

/*
You are creating an employee record system. Define a type alias for an employee ID that can be either a string or number. Write a function that takes this ID and returns a formatted string like:

Employee ID: E1234

Instructions:
Use a type alias for the ID.

Add proper types to the function parameter and return value.

Use template literals instead of string concatenation.
*/

// type aliases = {
//   firstName: string,
//   secondName: string,
//   id: string,
//   phone: string,
//   male: boolean,
//   age: number
// }
// let employee: aliases = {
//   firstName: "Wisdom",
//   secondName: "Okereke",
//   id: "E0027",
//   phone: "08099998877",
//   male: true,
//   age: 60
// }

// console.log(employee);


