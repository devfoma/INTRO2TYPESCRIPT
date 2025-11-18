let firstName = "Mekjah";
let lastName = "Bassey";
let fullName = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");
// 2 NUMBERS
let price = 1500;
let quantity = 3;
let totalPrice = price * quantity;
console.log("Total Price:", totalPrice);
// 3 BOOLEAN
let isAvailable = true;
if (isAvailable) {
    console.log("Item is available for purchase.");
}
else {
    console.log("Item is out of stock.");
}
// 4 UNION TYPE
function printId(id) {
    console.log("User ID is:", id);
}
printId(101);
printId("abc123");
// 5 ARRAYS
let studentNames = ["Ada", "Bola", "Chinedu"];
let scores = [90, 75, 88];
console.log(studentNames);
console.log(scores);
let user = {
    name: "Emmanuel",
    email: "emma@example.com",
};
let account = {
    accountNumber: "AC12345",
    balance: 5000,
};
let customer = { ...user, ...account };
console.log(customer);
function calculateTax(income, taxYear) {
    if (taxYear < 2025) {
        return (income / 100) * 1.2;
    }
    else {
        return (income / 100) * 1.4;
    }
}
let tax = calculateTax(5_000_000_000, 2030);
console.log("Tax is:", tax);
export {};
//# sourceMappingURL=activity.js.map