let firstName: string = "Mekjah";
let lastName: string= "Bassey";
let fullName: string = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");


// 2 NUMBERS
let price: number = 1500;
let quantity: number= 3;
let totalPrice: number = price * quantity;
console.log("Total Price:", totalPrice);


// 3 BOOLEAN
let isAvailable: boolean = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}



// 4 UNION TYPE
function printId(id: string | number ) {
  console.log("User ID is:", id);
}
printId(101);
printId("abc123");




// 5 ARRAYS
let studentNames: string[]=["Ada", "Bola", "Chinedu"];
let scores: number[] = [90, 75, 88];
console.log(studentNames);
console.log(scores);


// 6 INTERSECTION TYPE
 type user = {
    name: string,
    email: string,
};
type account = {
    accountNumber: string,
    balance: Number,
};

let user: user = {
  name: "Emmanuel",
  email: "emma@example.com",
};

let account: account = {
  accountNumber: "AC12345",
  balance: 5000,
};

let customer = { ...user, ...account };
console.log(customer);



function calculateTax(income:number, taxYear:number): number {
    if (taxYear < 2025) {
        return (income / 100) * 1.2;
    } else{
        return (income / 100) * 1.4;
    }
    
}

let tax : Number = calculateTax(5_000_000_000, 2030);

console.log("Tax is:", tax);