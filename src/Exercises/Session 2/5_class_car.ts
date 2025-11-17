
// 5. CLASSES AND ACCESS MODIFIERS

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

    displayInfo(): void {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
    }
}


const myCar = new Car("Toyota", "Camry", "ENG-9090-AB", 2020);

myCar.displayInfo();

// ERROR EXAMPLES (try uncommenting them in TypeScript to see errors)

// console.log(myCar.engineNumber); // Error: private property
// console.log(myCar.year);         // Error: protected property


// SUBCLASS: ElectricCar

class ElectricCar extends Car {
    public batteryLife: number;

    constructor(brand: string, model: string, engineNumber: string, year: number, batteryLife: number) {
        super(brand, model, engineNumber, year);
        this.batteryLife = batteryLife;
    }

    showYear(): void {
        console.log(`Manufactured Year: ${this.year}`);
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", "ELX-5511", 2023, 85);

tesla.displayInfo();
tesla.showYear();
console.log(`Battery Life: ${tesla.batteryLife}%`);
