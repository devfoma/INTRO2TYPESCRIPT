// Hehe yes it's empty you have to fill it with your solutions
// 1
let firstname: string = "Muhammad Thakeeb";
let lastName: string = "Muhammad";
let fullName: string = firstname + " " + lastName;
console.log(`Hello,  + ${fullName}  !`);
// 2
let price: number = 1500;
let quantity: number = 3;
let totalPrice: number = price * quantity;
console.log(`Total Price: ${totalPrice}`);
// 3
let isAvailable: boolean = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}
// 4
function printId(id: number | string) {
  console.log(`User ID is: ${id}`);
}
printId(101);
printId("abc123");
// 5
let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores)
// 6
type user = {
  name: string;
  email: string;
};
type account = {
  accountNumber: string;
  balance: number;
};
type customer = user & account;
const Customer: customer = {
  name: "Muhammad",
  email: "thakeebmuhammad@gmail.com",
  accountNumber: "ABC12345",
  balance: 5000,
};
console.log(Customer);
