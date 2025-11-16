// Hehe yes it's empty you have to fill it with your solutions

// 1 STRINGS
let firstName: string = "Faith";
let lastName: string = "Adeyemi";
let fullName: string = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");


// 2 NUMBERS
let price: number = 1500;
let quantity: number = 3;
let totalPrice: number = price * quantity;
console.log("Total Price:", totalPrice);


// 3 BOOLEAN
let isAvailable: Boolean = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}

// 4 UNION TYPE
function printId(id: string | number) {
  console.log("User ID is:", id);
}
printId(101);
printId("abc123");


// 5 ARRAYS
let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);


// 6 INTERSECTION TYPE
type User = {
  name: string;
  email: string;
};

type Account = {
  accountNumber: string;
  balance: number;
};

// Intersection type
type Customer = User & Account;

// Create the combined object
let customer: Customer = {
  name: "Emmanuel",
  email: "emma@example.com",
  accountNumber: "AC12345",
  balance: 5000,
};

console.log(customer);

