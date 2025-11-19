interface Person extends Emplyee{
    name: string,
    age: number,
}

let person: Person ={
    department: "FrontEnd",
    salary: 4999,
    name: "joel",
    age: 67,
}

interface Emplyee {
    department: string,
    salary: number,
}
let employee: Emplyee ={
    department: "FrontEnd",
    salary: 4999,
}
console.log(`${person.name} ${person.age} ${person.department} ${person.salary}`)