// Hehe yes it's empty you have to fill it with your solutions
//  1 STRINGS


let firstNameTS: string = "Faith";
let lastNameTS: string = "Adeyemi";
let fullNameTS: string = firstNameTS + " " + lastNameTS;

console.log("Hello, " + fullNameTS + "!");

//2 NUMBERS

let priceTS: number = 1500;
let quantityTS: number = 3;
let totalPriceTS: number = priceTS * quantityTS;

console.log("Total Price:", totalPriceTS);

//3 BOOLEANS

let isAvailable: boolean = true;

if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}

//4 UNION TYPE

function printId(id: string | number): void {
  console.log("User ID is:", id);
}

// Valid
printId(101);
printId("abc123");

// Invalid — TypeScript will show an error
// printId(true); 

//5 ARRAY
let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];

console.log(studentNames);
console.log(scores);

//6 INTERSECTION TYPE

type User = {
  name: string;
  email: string;
};

type Account = {
  accountNumber: string;
  balance: number;
};

// Combine User & Account into Customer using intersection type
type Customer = User & Account;

const customer: Customer = {
  name: "Emmanuel",
  email: "emma@example.com",
  accountNumber: "AC12345",
  balance: 5000,
};

console.log(customer);

// Last exercise
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2025) {
    return (income / 100) * 1.2;
  } else {
    return (income / 100) * 1.4;
  }
}

let tax: number = calculateTax(5_000_000_000, 2030);

console.log("Tax is:", tax);





