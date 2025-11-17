// //  1 STRINGS
let firstName: string = "Faith"
let lastName: string = "Adeyemi"
console.log(`Hello, ${firstName} ${lastName}!`)

// // // 2 NUMBERS
let price: number= 1500
let quantity: number= 3
let totalPrice: number= (price*quantity);
console.log(totalPrice)

// // // 3 BOOLEAN
let isAvailable: boolean= true
if (isAvailable){
    console.log("Item is availale for purchase.");
}else{
    console.log("Item is out of stock.")
}

// // // 4 UNION TYPE
function printId(id: string | number) {
        console.log("User ID is:", id);
}

printId(101);
printId("abc123");

// // // 5 ARRAYS
let studentNames: string[]= ["Ada", "Bola", "Chinedu"]
let scores: number[]= [90, 75, 88]
console.log(`${studentNames[0]} scored ${scores[0]}`)
console.log(`${studentNames[1]} scored ${scores[1]}`)
console.log(`${studentNames[2]} scored ${scores[2]}`)

// // 6 INTERSECTION TYPE
// let user: {name: string, email: string}={
//          name: "Emmanuel",
//         email: "emma@example.com"
// }
// let account: {accountNumber: string, balance:number}={
//     accountNumber: "AC12345",
//     balance: 5000,
// }
// let customer: {name:string, email:string, accountNumber:string, balance:number} = {...user, ...account};
// console.log(customer)

type user = {
    name: string,
    email: String
};
type account ={
    accountNumber: string,
    balance: number
};

let user: user ={
    name: "Emmanuel",
    email: "emma@example.com"
}
let account: account={
    accountNumber: "AC12345",
    balance: 5000
}
type customer= user & account;
let customer: customer={
    name: user.name,
    email: user.email,
    accountNumber: account.accountNumber,
    balance: account.balance
}
console.log(customer);