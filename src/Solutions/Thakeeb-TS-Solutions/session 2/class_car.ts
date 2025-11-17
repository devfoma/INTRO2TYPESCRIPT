class Car {
  constructor(
    public brand: string,
    public model: string,
    private engineNumber: number,
    protected year: number
  ) {
    this.brand = brand;
    this.model = model;
    this.engineNumber = engineNumber;
    this.year = year;
  }
  public displayInfo(): string {
    return `Car: ${this.brand} ${this.model}, Engine Number: ${this.engineNumber}, Year: ${this.year}`;
  }
}
const myCar = new Car("Toyota", "Corolla", 123456789, 2025);
console.log(myCar);
console.log(myCar.displayInfo());
class electricCar extends Car {
  constructor(public batteryLife: number) {
    super(brand, model, engineNumber, year);
    this.batteryLife = batteryLife;
  }
  public displayELectricInfo(): string {
    return `Electric Car: ${this.brand} ${this.model}, Battery Life: ${this.batteryLife} hours`;
  }
}
const myElectricCar = new electricCar(`Tesla`, `Model S`, 987654321, 2023, 24;)
console.log(myElectricCar);
console.log(myElectricCar.displayELectricInfo());