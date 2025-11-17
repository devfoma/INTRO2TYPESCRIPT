import {type EmployeeID} from '../../../../dist/Solutions/Oguamah-TS_Solutions/Session-2/typeAlias_function.js';
import {Car} from '../../../../dist/Solutions/Oguamah-TS_Solutions/Session-2/class_car.js';
import {ElectricCar} from '../../../../dist/Solutions/Oguamah-TS_Solutions/Session-2/class_car.js';
import {TaskStatus} from '../../../../dist/Solutions/Oguamah-TS_Solutions/Session-2/enum_taskStatus.js';
import {checkStatus} from '../../../../dist/Solutions/Oguamah-TS_Solutions/Session-2/enum_taskStatus.js';

function describeEmployee(id: EmployeeID): string {
    return `Employee Identifier: ${id}`;
}

console.log(describeEmployee("A001"));

console.log(Car.length);

const myCar = new Car("Toyota", "Corolla", "EN12345", 2020);
myCar.displayInfo();

const myElectricCar = new ElectricCar("Nissan", "Leaf", "EN54321", 2021, 10);
myElectricCar.displayInfo();
myElectricCar.showDetails();


// implementing function from enum_taskStatus.ts
checkStatus(TaskStatus.Pending);
checkStatus(TaskStatus.Completed);

// DRY - Don't Repeat Yourself principle applied by reusing imports and functions