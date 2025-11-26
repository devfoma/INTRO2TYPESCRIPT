class Car {
    // brand: string;
    // model: string;
    // engineNumber: string;
    // year: number;

    constructor(
        public brand: string,
        public model: string,
        private engineNumber: string,
        protected year: number,
    ) {
        this.brand = brand;
        this.model = model;
        this.engineNumber = engineNumber;
        this.year = year;
    }

    public displayInfo(): string {
        return `My Car brand is ${this.brand} and model is ${this.model}`;
    }
}

const myCar = new Car("Ferrari", "488 Spider", "EN123456789", 2020);
console.log(myCar.displayInfo());
/*
5. Classes and Access Modifiers

### Scenario:
Create a Car class with:

brand (public)

model (public)

engineNumber (private)

year (protected)

Add a constructor to set these values and a method displayInfo() that logs only public properties.

### Instructions:

Use access modifiers properly.

Try to access private and protected properties outside the class and observe what happens.

Create a subclass ElectricCar that extends Car and adds a batteryLife property.
*/

// Classes
// class Coder {
//     // name: string;
//     // music: string;
//     // age: number;
//     // lang: string;

//     constructor(
//         public name: string,
//         public music: string,
//         private age: number,
//         protected lang: string
//     ) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }

//     public getLang(): string {
//         return `${this.name} programs in ${this.lang}`;
//     }
// }

// const Emma = new Coder("Emma", "Afrobeat", 20, "Typescript");

// console.log(Emma);
// console.log(Emma.getLang());

// // Creating a subclass of Coder
// class webDev extends Coder{
//     constructor(
//         public computer: string,
//         private github: string,
//         name: string,
//         music: string,
//         age: number,
//         lang: string
//     ) {
//         super(name, music, age, lang);
//         this.computer = computer;
//         this.github = github;
//     }

//     public getGitHub() {
//         return `The Github username of ${this.name} is ${this.github}`;
//     }
// }

// // Identifying Access Modifiers Usage
// console.log(Emma.name);
// console.log(Emma.music);
// // console.log(Emma.age);
// // console.log(Emma.lang);