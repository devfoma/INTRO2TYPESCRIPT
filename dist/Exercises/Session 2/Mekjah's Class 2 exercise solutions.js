"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let EmployeeId = "Mekjah";
function EmployeeName(id) {
    if (EmployeeId === "Mekjah") {
        return "Employee Id: E1234;";
    }
    else {
        return "sorry, you're not an employee";
    }
}
console.log(EmployeeName("Mekjah"));
function logLocation(coords) {
    const [latitude, longitude] = coords;
    console.log(`Location coordinates: ${latitude}° N, ${longitude}° E`);
}
const lagosCoords = [6.5244, 3.3792];
logLocation(lagosCoords);
// 3. Enums and Conditional Logic
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Pending"] = 0] = "Pending";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
})(TaskStatus || (TaskStatus = {}));
// 2. Function that checks the status and logs a message
function checkStatus(status) {
    switch (status) {
        case TaskStatus.Pending:
            console.log("The task is still pending.");
            break;
        case TaskStatus.InProgress:
            console.log("The task is currently in progress.");
            break;
        case TaskStatus.Completed:
            console.log("The task has been completed!");
            break;
        default:
            console.log("Unknown task status.");
    }
}
checkStatus(TaskStatus.InProgress);
const employeeData = {
    name: "John Doe",
    age: 30,
    department: "Engineering",
    salary: 75000
};
console.log(`
Employee Details:
Name: ${employeeData.name}
Age: ${employeeData.age}
Department: ${employeeData.department}
Salary: $${employeeData.salary}
`);
// 5. Classes and Access Modifiers
// 1. Car class
class Car {
    brand;
    model;
    engineNumber;
    year;
    constructor(brand, model, engineNumber, year) {
        this.brand = brand;
        this.model = model;
        this.engineNumber = engineNumber;
        this.year = year;
    }
    // 2. Only logs public properties
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
        // Cannot log engineNumber or year because they are private/protected
    }
}
// 3. Subclass extending Car
class ElectricCar extends Car {
    batteryLife;
    constructor(brand, model, engineNumber, year, batteryLife) {
        super(brand, model, engineNumber, year);
        this.batteryLife = batteryLife;
    }
    // Example: ElectricCar can access protected year, but NOT private engineNumber
    showElectricInfo() {
        console.log(`This electric car was made in ${this.year} and has ${this.batteryLife} hours battery life.`);
        // this.engineNumber ❌ ERROR (private)
    }
}
// 4. Create objects
const myCar = new Car("Toyota", "Corolla", "ENG12345", 2020);
myCar.displayInfo();
// 5. Try accessing properties outside the class
console.log(myCar.brand); // ✔️ public
console.log(myCar.model); // ✔️ public
// console.log(myCar.engineNumber); // ❌ ERROR: private
// console.log(myCar.year);         // ❌ ERROR: protected
// 6. ElectricCar example
const tesla = new ElectricCar("Tesla", "Model S", "ELX99999", 2023, 12);
tesla.displayInfo();
tesla.showElectricInfo();
// console.log(tesla.year);         // ❌ ERROR: protected
// console.log(tesla.engineNumber); // ❌ ERROR: private
// 6. Mini Project: Student Management System
// 1. Enum for student levels
var Level;
(function (Level) {
    Level["Hundred"] = "100L";
    Level["TwoHundred"] = "200L";
    Level["ThreeHundred"] = "300L";
    Level["FourHundred"] = "400L";
})(Level || (Level = {}));
// 4. Student class
class Student {
    name;
    level;
    id;
    constructor(name, level, id) {
        this.name = name;
        this.level = level;
        this.id = id;
    }
    displayInfo() {
        console.log(`Student: ${this.name}, Level: ${this.level}`);
        // this.id is private → cannot be logged outside class
    }
    // getter to safely access private ID
    getStudentId() {
        return this.id;
    }
}
// 5. Subclass adding department + more details
class DepartmentStudent extends Student {
    department;
    constructor(name, level, id, department) {
        super(name, level, id);
        this.department = department;
    }
    showDetails() {
        console.log(`Name: ${this.name}, Dept: ${this.department}, Level: ${this.level}, ID: ${this.getStudentId()}`);
    }
}
// 6. A list to store students
const students = [];
// 7. Function to register a new student
function registerStudent(info, level, id) {
    const newStudent = new DepartmentStudent(info.name, level, id, info.department);
    students.push(newStudent);
    console.log(`Student ${info.name} registered successfully.`);
}
// 8. Function to list all students
function listStudents() {
    console.log("\n=== All Registered Students ===");
    students.forEach((s) => s.showDetails());
}
// --- Example usage ---
registerStudent({ name: "John Doe", age: 19, department: "Computer Science" }, Level.Hundred, 101);
registerStudent({ name: "Sarah Johnson", age: 21, department: "Biochemistry" }, Level.TwoHundred, 102);
// List all students
listStudents();
// 7. Bonus Challenge: Transaction System
// 1. Enum with different keys and values
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "DEPOSIT";
    TransactionType["Withdrawal"] = "WITHDRAWAL";
})(TransactionType || (TransactionType = {}));
// 2. Transaction class
class Transaction {
    id;
    amount;
    type;
    constructor(id, amount, type) {
        this.id = id;
        this.amount = amount;
        this.type = type;
    }
    // 3. Method to print a summary
    printSummary() {
        console.log(`Transaction #${this.id}: ${this.type === TransactionType.Deposit ? "Deposit" : "Withdrawal"} of ₦${this.amount} successful.`);
    }
}
// 4. Example usage
const t1 = new Transaction("TX100", 5000, TransactionType.Deposit);
const t2 = new Transaction(202, 2500, TransactionType.Withdrawal);
t1.printSummary();
t2.printSummary();
//# sourceMappingURL=Mekjah's%20Class%202%20exercise%20solutions.js.map