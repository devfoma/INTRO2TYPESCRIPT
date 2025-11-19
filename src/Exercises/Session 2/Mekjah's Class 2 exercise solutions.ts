// 1. Type Alias and Function
type EmployeeId="string"
let EmployeeId="Mekjah"

function EmployeeName(id:string): string|number {
    if (EmployeeId==="Mekjah"){
        return "Employee Id: E1234;"
    }else{
        return "sorry, you're not an employee";
    }
}
console.log(EmployeeName("Mekjah"));

// 2. Tuples

type Coordinates = [number, number];

function logLocation(coords: Coordinates): void {
    const [latitude, longitude] = coords;
    console.log(`Location coordinates: ${latitude}° N, ${longitude}° E`);
}
const lagosCoords: Coordinates = [6.5244, 3.3792];
logLocation(lagosCoords);

// 3. Enums and Conditional Logic

enum TaskStatus {
    Pending,
    InProgress,
    Completed
}

// 2. Function that checks the status and logs a message
function checkStatus(status: TaskStatus): void {
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

//  4. Interfaces and Interface Inheritance

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    department: string;
    salary: number;
}

const employeeData: Employee = {
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
    public brand: string;
    public model: string;
    private engineNumber: string;
    protected year: number;

    constructor(brand: string, model: string, engineNumber: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.engineNumber = engineNumber;
        this.year = year;
    }

    // 2. Only logs public properties
    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
        // Cannot log engineNumber or year because they are private/protected
    }
}

// 3. Subclass extending Car
class ElectricCar extends Car {
    public batteryLife: number;

    constructor(
        brand: string,
        model: string,
        engineNumber: string,
        year: number,
        batteryLife: number
    ) {
        super(brand, model, engineNumber, year);
        this.batteryLife = batteryLife;
    }

    // Example: ElectricCar can access protected year, but NOT private engineNumber
    showElectricInfo(): void {
        console.log(`This electric car was made in ${this.year} and has ${this.batteryLife} hours battery life.`);
        // this.engineNumber ❌ ERROR (private)
    }
}

// 4. Create objects
const myCar = new Car("Toyota", "Corolla", "ENG12345", 2020);
myCar.displayInfo();

// 5. Try accessing properties outside the class
console.log(myCar.brand);        // ✔️ public
console.log(myCar.model);        // ✔️ public

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
enum Level {
    Hundred = "100L",
    TwoHundred = "200L",
    ThreeHundred = "300L",
    FourHundred = "400L"
}

// 2. Base interface for persons
interface Person {
    name: string;
    age: number;
}

// 3. Student interface extends Person
interface StudentInfo extends Person {
    department: string;
}

// 4. Student class
class Student {
    public name: string;
    protected level: Level;
    private id: number;

    constructor(name: string, level: Level, id: number) {
        this.name = name;
        this.level = level;
        this.id = id;
    }

    displayInfo() {
        console.log(`Student: ${this.name}, Level: ${this.level}`);
        // this.id is private → cannot be logged outside class
    }

    // getter to safely access private ID
    getStudentId(): number {
        return this.id;
    }
}

// 5. Subclass adding department + more details
class DepartmentStudent extends Student {
    public department: string;

    constructor(name: string, level: Level, id: number, department: string) {
        super(name, level, id);
        this.department = department;
    }

    showDetails() {
        console.log(
            `Name: ${this.name}, Dept: ${this.department}, Level: ${this.level}, ID: ${this.getStudentId()}`
        );
    }
}

// 6. A list to store students
const students: DepartmentStudent[] = [];

// 7. Function to register a new student
function registerStudent(info: StudentInfo, level: Level, id: number) {
    const newStudent = new DepartmentStudent(
        info.name,
        level,
        id,
        info.department
    );
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
enum TransactionType {
    Deposit = "DEPOSIT",
    Withdrawal = "WITHDRAWAL"
}

// 2. Transaction class
class Transaction {
    private id: string | number;
    private amount: number;
    private type: TransactionType;

    constructor(id: string | number, amount: number, type: TransactionType) {
        this.id = id;
        this.amount = amount;
        this.type = type;
    }

    // 3. Method to print a summary
    printSummary(): void {
        console.log(
            `Transaction #${this.id}: ${this.type === TransactionType.Deposit ? "Deposit" : "Withdrawal"} of ₦${this.amount} successful.`
        );
    }
}

// 4. Example usage
const t1 = new Transaction("TX100", 5000, TransactionType.Deposit);
const t2 = new Transaction(202, 2500, TransactionType.Withdrawal);

t1.printSummary();
t2.printSummary();

