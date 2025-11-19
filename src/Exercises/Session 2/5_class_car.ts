class carclass{
    
    constructor(
     public brand: string,
     public model: string,
     private engineerNumber: number,
     protected year: number,
    ){
     brand = this.brand,
     model = this.model,
     engineerNumber =this.engineerNumber,
     year = this.year
    }
 public getCarClass(): string{
    return `${this.brand} ${this.model} ${this.engineerNumber} ${this.year} `
 }
}

const joel = new carclass("Toyota", "Camry", 123, 2025)

console.log(joel.getCarClass())
