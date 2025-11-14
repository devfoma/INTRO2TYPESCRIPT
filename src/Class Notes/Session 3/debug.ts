// // ==========================================
// // DEBUGGING EXERCISES (BEGINNER FRIENDLY)
// // Fix the errors in each section
// // ==========================================



// // ==========================================
// // 1. STRING vs NUMBER
// // ==========================================
// let age: number = "25";  // BUG: wrong type
// console.log(age);



// // ==========================================
// // 2. BOOLEAN TYPE ISSUE
// // ==========================================
// let isActive: boolean = "true";  // BUG: boolean should not be a string

// if (isActive) {
//   console.log("Active");
// }



// // ==========================================
// // 3. FUNCTION PARAMETER TYPE
// // ==========================================
// function greet(name: string) {
//   console.log("Hello " + name);
// }

// greet(101);   // BUG: number passed instead of string



// // ==========================================
// // 4. UNION TYPE MISUSE
// // ==========================================
// function getPrice(id: string | number) {
//   return id * 2;   // BUG: string * number causes NaN
// }

// console.log(getPrice("A001"));



// // ==========================================
// // 5. ARRAY TYPE ERROR
// // ==========================================
// let fruits: string[] = ["apple", "orange", 500];
