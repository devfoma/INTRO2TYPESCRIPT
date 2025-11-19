// Hehe yes it's empty you have to fill it with your solutions

// 1 STRING
 let firstName: string = "Faith";
 let lastName: string = "Adeyemi";
 let fullName: string = firstName + " " + lastName;
 console.log("Hello, " + fullName + "!");

 // 2 numbers
  let price: number = 1500;
  let quantity: number = 3;
  let totalPrice: number = price * quantity;
  console.log("Total Price:", totalPrice)

  // 3 Boolean
  let isAvailable: boolean = true;
  if (isAvailable) {
  console.log("Item is available for purchase.");
  } else {console.log("Item is out of stock.");
  console.log("Item is out of stock.");
  }

  //4 Union type
function printId(id: string | number): string | number {
  console.log("User ID is:", id);
  return  id
}
printId(101);
printId("abc123");
// printId(true); 

//5 Array
let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);

// 6 Intersection type

type User = {
    name: string,
    email: string,
}
let user: User = {
  name: "Emmanuel",
  email: "emma@example.com",
};

type Account = {
    accountNumber: string,
    balance: number,
}

let account: Account = {
  accountNumber: "AC12345",
  balance: 5000,
};

type Customer = Account & User

let customer: Customer = {
    name: user.name,
    email: user.email,
    accountNumber: account.accountNumber,
    balance: account.balance
}

// 7 the function 
function calculateTax(income: number, taxYear: number): number{
    if (taxYear < 2025) {
        return (income / 100) * 1.2;
    } else{
        return (income / 100) * 1.4;
    }
    
}

let tax: number = calculateTax(5_000_000_000, 2030);

console.log("Tax is:", tax);


