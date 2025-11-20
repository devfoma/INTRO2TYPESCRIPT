// vanilla javascript, type inference: the compiler guesses the data type based on the value passed
// let age: number = 20;
// age = "20 years old"
// console.log("My name is ", age)
// in typescript
let ageTS = 20;
let name = "Nonso";
// name = 20;
console.log(`My name is ${name}, and I am ${ageTS}`);
// boolean: true or false
let isAdmin = true;
let isLoggenIn = false;
if (isLoggenIn) {
    console.log(`${name} Welcome back to our application`);
}
else {
    console.log("please sign in/ sign up");
}
if (isAdmin) {
    console.log("You have access to your admin dashboard");
}
else {
    console.log("You are not an admin");
}
// in ts your array can only accept one datatype, 
let employeeName = ["Abigail", "Joseph", "Valerie", "John"];
let yearJoined = [2000, 2010, 2015, 2020];
console.log(`${employeeName[0]} joined in the year: ${yearJoined[0]}`);
console.log(`${employeeName[1]} joined in the year: ${yearJoined[1]}`);
console.log(`${employeeName[2]} joined in the year: ${yearJoined[2]}`);
console.log(`${employeeName[3]} joined in the year: ${yearJoined[3]}`);
let hobbies = ["swimming", "jogging", "knitting.",];
let year = [10, 12, 20, 25];
// console.log(`${name} hobbies are ${hobbies} and he is ${year[1]}`)
// union type (or) and intersection type  (and)
let mixedArray = ["john", "nonso", 5, 20, true];
let difArray = ["john", "abigail", 2015, false];
function kgTOLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let dubArray;
export {};
//# sourceMappingURL=index.js.map