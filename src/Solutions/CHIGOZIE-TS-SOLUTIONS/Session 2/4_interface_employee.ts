interface person {
  age: number;
  name: string;
}
interface employee extends person {
  department: string;
  salary: number;
}

const Employee: employee = {
  name: "OKORIE CHIGOZIE",
  age: 21,
  department: "SOTFWARE",
  salary: 1000000,
};
console.log(
  `Employee Info: ${Employee.name}, Age: ${Employee.age}, Department: ${Employee.department}, Salary: $${Employee.salary}`
);
