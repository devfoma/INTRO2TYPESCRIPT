//  Session 2 - Task 5
//  Topic: Classes and Access Modifiers
//  Description: Create Car and ElectricCar classes with access modifiers.
 

export class Car {
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
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

export class ElectricCar extends Car {
  batteryLife: number;

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

  showDetails(): void {
    
    console.log(
      `Electric Car: ${this.brand} ${this.model}, Year: ${this.year}, Battery: ${this.batteryLife} hrs`
    );
  }
}


const tesla = new ElectricCar("Tesla", "Model S", "EN98765", 2023, 12);
tesla.displayInfo();
tesla.showDetails();