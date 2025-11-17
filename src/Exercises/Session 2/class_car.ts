// ## 5. Classes and Access Modifiers

// ### Scenario:
// Create a Car class with:

// brand (public)

// model (public)

// engineNumber (private)

// year (protected)

// Add a constructor to set these values and a method displayInfo() that logs only public properties.

// ### Instructions:

// Use access modifiers properly.

// Try to access private and protected properties outside the class and observe what happens.

// Create a subclass ElectricCar that extends Car and adds a batteryLife property.

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

    public displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}

class ElectricCar extends Car {
    public batteryLife: number;

    constructor(brand: string, model: string, engineNumber: string, year: number, batteryLife: number) {
        super(brand, model, engineNumber, year);
        this.batteryLife = batteryLife;
    }
}


const myCar = new Car("Toyota", "Corolla", "12345", 2020);
myCar.displayInfo(); 

// console.log(myCar.engineNumber); 
// console.log(myCar.year); 
