class Car {
  public brand: string;
  public model: string;
  private engineNumber: number;
  protected year: number;

  constructor(
    brand: string,
    model: string,
    engineNumber: number,
    year: number
  ) {
    this.brand = brand;
    this.model = model;
    this.engineNumber = engineNumber;
    this.year = year;
  }

  displayInfo(): void {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

class ElectricCar extends Car {
  batteryLife: number;

  constructor(
    brand: string,
    model: string,
    engineNumber: number,
    year: number,
    batteryLife: number
  ) {
    super(brand, model, engineNumber, year);
    this.batteryLife = batteryLife;
  }

  showBranddetails(): void {
    console.log(
      `Electric Car: ${this.brand} ${this.model}, Year: ${this.year}, Battery Capacity: ${this.batteryLife} mins per day`
    );
  }
}

const tesla = new ElectricCar("GLK", "3RC", 98765, 2023, 12);
tesla.displayInfo();
tesla.showBranddetails();
// tesla.showBranddetails();
