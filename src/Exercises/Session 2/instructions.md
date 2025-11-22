# TypeScript Class 2 Exercises

These exercises will help you practice the concepts you learned in class, including type aliases, tuples, enums, functions, interfaces, classes, and access modifiers.

Each task should be written in TypeScript (.ts) using the same structure and comment style from the previous class.
You should write your code in each file and push your solution to your own branch when submitting.



## Folder Suggestion
Session 2/
│

├── 1_typeAlias_function.ts

├── 2_tuple_coordinates.ts

├── 3_enum_taskStatus.ts

├── 4_interface_employee.ts

├── 5_class_car.ts

├── 6_mini_project_studentReport.ts

└── bonus_transactionSystem.ts

## Submission Guideline

Follow the same file naming and comment format from the previous README.

Complete all tasks in TypeScript.

Push your completed solutions to your own branch in the repository.


## 1. Type Alias and Function

### Scenario:
You are creating an employee record system.
Define a type alias for an employee ID that can be either a string or number.
Write a function that takes this ID and returns a formatted string like:

Employee ID: E1234


### Instructions:

Use a type alias for the ID.

Add proper types to the function parameter and return value.

Use template literals instead of string concatenation.

## 2. Tuples

### Scenario:
Your company stores location data as a tuple of [latitude, longitude].
Write a function that accepts this tuple and logs the location like:

Location coordinates: 6.5244° N, 3.3792° E


### Instructions:

Create a tuple type alias for coordinates.

Use that alias as the parameter type in the function.

The function should not return anything.

## 3. Enums and Conditional Logic

### Scenario:
You are building a small task manager. Each task can have a status: Pending, InProgress, or Completed.
Use an enum to represent these statuses and write a function that prints a message based on the task’s status.

### Instructions:

Create an enum called TaskStatus.

Write a function checkStatus that takes the enum as a parameter.

Use a switch or if statement to display different messages.

## 4. Interfaces and Interface Inheritance

### Scenario:
Create an interface Person with name and age.
Then extend it to Employee, adding department and salary.
Create an object that follows the Employee structure and log its properties.

### Instructions:

Use extends for inheritance.

Type the object properly, do not use any.

Use template literals to display the details.

## 5. Classes and Access Modifiers

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

## 6. Mini Project: Student Management System

### Scenario:
Build a small student management system using what you have learned.

### Requirements:

Create an enum GradeLevel with: Freshman, Sophomore, Junior, Senior.

Create an interface Student with:

name

age

gradeLevel (enum)

subjects (tuple of [subjectName, score])

Create a class Report that:

Has a private array of students.

Has a method addStudent() to add a new student.

Has a method printReport() to display all student information.

### Instructions:

Use all the concepts from this week.

Focus on correct typing and structure.

Keep your code organized and readable.

## 7. Bonus Challenge

### Scenario:
You are creating a Transaction system for a fintech app.

Each transaction should store:

an ID (string or number)

an amount

a transaction type (enum: Deposit | Withdrawal)

a method that prints a summary like:

Transaction #TX100: Deposit of ₦5000 successful.


### Extra:
Use enums where the keys and values are different, for example:

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
}


