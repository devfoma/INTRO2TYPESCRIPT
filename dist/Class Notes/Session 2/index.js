// Hehe yes it's empty you have to fill it with your solutions
// function printId(id: string | number) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");
// intersection logical AND (&)
// let user = {
//   name: "Emmanuel",
//   email: "emma@example.com",
// };
// let account = {
//   accountNumber: "AC12345",
//   balance: 5000,
// };
// let customer = { ...user, ...account };
// console.log(customer);
// let user: {name: string, email: string, phone: number} ={
//     name: "Emmanuel",
//     email: "emma@example.com",
//     phone: 1234567890
// }
// let account: {
//     accountNumber: string,
//     balance: number,
//     accountName: string
// } = {
//     accountNumber: "AC12345",
//     balance: 5000,
//     accountName: "emma"
// }
// let customer: {
//     name: string, 
//     email: string,
//     phone: number, 
//     accountNumber: string, 
//     balance: number
// } = {...user, ...account};
// console.log(customer);
// interface User {
//     name: string,
//     email: string,
//     phone: number,
// };
// interface Account extends User{
//     accountNumber: string,
//     balance: number,
//     accountName: string
// }
// let user: User ={
//     name: "Emmanuel",
//     email: "emma@example.com",
//     phone: 1234567890
// }
// let account: Account ={
//     name: "Emmanuel",
//     email: "emma@example.com",
//     phone: 1234567890,
//     accountNumber: "AC12345",
//     balance: 5000,
//     accountName: "emma"
// }
// type Customer = User & Account;
// let customer: Customer ={
//     name: user.name,
//     email: user.email,
//     phone: user.phone,
//     accountNumber: account.accountNumber,
//     balance: account.balance,
//     accountName: account.accountName
// }
// console.log(account);
// tuple
// let myCustomer: [string, number, boolean, number] = ['Emma', 25, false, 20];
// console.log(myCustomer);
// let mixedArray = ['John', 1, true];
// console.log(mixedArray);
// mixedArray = myCustomer; // This is allowed
// myTuple = mixed; // This should cause a type error
// console.log(mixed);
// Enum 
// const Small = 's';
// const Medium = 'm';
// const Large = 'l';
// const ExtraLarge = 'xl';
// enum for different sizes of tshirts, it uses the PascalCase naming convention, used for storing constants.
// enum Size {
//     Small = 'small',
//     Medium = 'medium',
//     Large = 'large',
//     ExtraLarge = 'extraLarge'
// }
// let mySize: Size = Size.Large;
// let emmaSize: Size = Size.Medium;
// let stephenSize: Size = Size.ExtraLarge;
// console.log("My size is:", mySize);
// console.log("Emma's size is:", emmaSize);
// console.log("Stephen's size is:", stephenSize);
// Functions
// function calculateTax(income: number, taxYear: number): number{
//     if (taxYear < 2025) {
//         return (income / 100) * 1.2;
// //     } else{
// //         return (income / 100) * 1.4;
// //     }
// // }
// // // let myIncome: number = 500_000_000;
// // let tax: number = calculateTax(5_000_000_000, 2030);
// // console.log("Tax is:", tax);
// interface Employee{
//    readonly id: number;
//     name: string;
//     salary: number;
// };
// interface Manager extends Employee{
//     department: string;
//     office: number;
//     salary: number;
// }
// let employee: Employee={
//     id: 1,
//     name: "John Adebayo",
//     salary: 500_000
// };
// let manager: Manager = {
//     id: 2,
//     name: "Jane Adebisi",
//     salary: 1_000_000,
//     department: "Sales",
//     office: 101,
// }
// console.log(`Employee Name: ${employee.name}, Salary: ${employee.salary}`);
// console.log(`Manager Name: ${manager.name}, Salary: ${manager.salary}, Department: ${manager.department}`);
// classes
class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getLang() {
        return `${this.name} programs in ${this.lang}, and he is ${this.age} years old.`;
    }
}
const Emma = new Coder("Emma", "AfroBeat", 29, "TypeScript");
// subclass in typescript
class WebDev extends Coder {
    computer;
    github;
    constructor(computer, github, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.github = github;
        this.computer = computer;
        this.github = github;
    }
    getGithub() {
        return `The Github username of ${this.name} is ${this.github} adnd he codes in ${this.lang} `;
    }
}
const EmmaDev = new WebDev("MacBook Pro", "emmaGitHub", "Emma", "AfroBeat", 29, "TypeScript");
console.log(Emma);
console.log(Emma.getLang());
console.log(Emma.name);
// console.log(Emma.age); // This should cause an error because age is privat
console.log(EmmaDev);
console.log(EmmaDev.getLang());
console.log(EmmaDev.getGithub());
export {};
// console.log(EmmaDev.lang); // This should cause an error because lang is protected
// console.log(EmmaDev.age);
// public assess anywhere
// private assess only within the class
// protected assess within the class and subclasses
//# sourceMappingURL=index.js.map