"use strict";
// // ==========================================
// // DEBUGGING EXERCISES (BEGINNER FRIENDLY)
// // Fix the errors in each section
// // ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// 1. STRING vs NUMBER
// ==========================================
let age = 25; // BUG: wrong type
console.log(age);
// ==========================================
// 2. BOOLEAN TYPE ISSUE
// ==========================================
let isActive = true; // BUG: boolean should not be a string
if (isActive) {
    console.log("Active");
}
// ==========================================
// 3. FUNCTION PARAMETER TYPE
// ==========================================
function greet(name) {
    console.log("Hello " + name);
}
greet("mekjah"); // BUG: number passed instead of string
// ==========================================
// 4. UNION TYPE MISUSE
// ==========================================
function getPrice(id) {
    return id * 2; // BUG: string * number causes NaN
}
console.log(getPrice(1));
// ==========================================
// 5. ARRAY TYPE ERROR
// ==========================================
let fruits = ["apple", "orange",];
//# sourceMappingURL=debug.js.map