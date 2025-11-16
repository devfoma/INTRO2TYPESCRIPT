// Hehe yes it's empty you have to fill it with your solutions
// 1
let firstName: string = "okorie";
let lastName: string = "chigozie";
let fullName: string = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");

// 2
let price: number = 1500;
let quantity: number = 3;
let totalPrice: number = price * quantity;
console.log("Total Price:", totalPrice);
// 3

let isAvailable: boolean = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}
// 4
function printId(id: string | number | boolean) {
  console.log("User ID is:", id);
}
printId(101);
printId("abc123");
printId(true);
// 5
let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);

// 6
//
let User: {
  name: string;
  email: string;
} = {
  name: "okorie chigozie",
  email: "okoriechigoze.com",
};

let Account: {
  accountNumber: string;
  balance: number;
} = {
  accountNumber: "2026XYZ",
  balance: 50000,
};

let customer: {
  name: string;
  email: string;
  accountNumber: string;
  balance: number;
} = {
  ...User,
  ...Account,
};

console.log("customer:", customer);

// 7

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2025) {
    return (income / 100) * 1.2;
  } else {
    return (income / 100) * 1.4;
  }
}

let tax: number = calculateTax(5_000_000_000, 2030);

console.log("Tax is:", tax);
