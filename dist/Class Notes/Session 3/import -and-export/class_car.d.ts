export declare class Car {
    brand: string;
    model: string;
    private engineNumber;
    protected year: number;
    constructor(brand: string, model: string, engineNumber: string, year: number);
    displayInfo(): void;
}
export declare class ElectricCar extends Car {
    batteryLife: number;
    constructor(brand: string, model: string, engineNumber: string, year: number, batteryLife: number);
    showDetails(): void;
}
//# sourceMappingURL=class_car.d.ts.map