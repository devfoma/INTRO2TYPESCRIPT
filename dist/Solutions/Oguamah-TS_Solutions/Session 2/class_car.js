"use strict";
//  Session 2 - Task 5
//  Topic: Classes and Access Modifiers
//  Description: Create Car and ElectricCar classes with access modifiers.
Object.defineProperty(exports, "__esModule", { value: true });
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
    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}
class ElectricCar extends Car {
    batteryLife;
    constructor(brand, model, engineNumber, year, batteryLife) {
        super(brand, model, engineNumber, year);
        this.batteryLife = batteryLife;
    }
    showDetails() {
        console.log(`Electric Car: ${this.brand} ${this.model}, Year: ${this.year}, Battery: ${this.batteryLife} hrs`);
    }
}
const tesla = new ElectricCar("Tesla", "Model S", "EN98765", 2023, 12);
tesla.displayInfo();
tesla.showDetails();
//# sourceMappingURL=class_car.js.map