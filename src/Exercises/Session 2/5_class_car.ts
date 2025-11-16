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
    private engineNumber: number;
    protected year: number;
    constructor(brand: string, model: string, engineNumber: number, year: number) {
        this.brand = brand;
        this.model = model;
        this.engineNumber = engineNumber;
        this.year = year;
    }
      
    
    displayInfo() {
        console.log(`I bought a ${this.brand} ${this.model} with engine number of ${this.engineNumber} and made in year ${this.year}`);
    }
}

const carInfo = new Car("Toyota", "Camery", 23, 2015);
carInfo.displayInfo();