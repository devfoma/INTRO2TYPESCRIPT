// // Hehe yes it's empty you have to fill it with your solutions
let user = {
    name: "Emmanuel",
    email: "emma@example.com",
};
let account = {
    accountNumber: "AC12345",
    balance: 5000,
};
// customer = ( user & account);
let customer = {
    name: user.name,
    email: user.email,
    accountNumber: account.accountNumber,
    balance: account.balance
};
console.log(customer);
export {};
// function calculateTax(income:number, taxYear:number):number{
//     if (taxYear < 2025) {
//         return (income / 100) * 1.2;
//     } else{
//         return (income / 100) * 1.4;
//     }
// }
// let tax = calculateTax(5_000_000_000, 2030);
// console.log("Tax is:", tax);
//# sourceMappingURL=index.js.map