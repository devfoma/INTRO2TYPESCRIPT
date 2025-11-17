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
        this.brand = brand;
        this.model = model;
        this.engineNumber = engineNumber;
        this.year = year;
    }
    displayInfo() {
        return `Car: ${this.brand} ${this.model}, Engine Number: ${this.engineNumber}, Year: ${this.year}`;
    }
}
const myCar = new Car("Toyota", "Corolla", 123456789, 2025);
console.log(myCar);
console.log(myCar.displayInfo());
export {};
//# sourceMappingURL=class_car.js.map