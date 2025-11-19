"use strict";
// Generics
Object.defineProperty(exports, "__esModule", { value: true });
// arrow function
// const myFunction = (arg: string): string => arg
// // traditional function
// function ourFunction ( arg: string): string {
//     return arg
// }
// function ourFunction<myGenericType>(arg:myGenericType):myGenericType{
//     return arg
// }
// console.log(ourFunction<string>("Hello Generics"))
function webGenericFunction(valone, valtwo) {
    return [valone, valtwo];
}
console.log(webGenericFunction(true, "Hello Generics"));
console.log(webGenericFunction("Hello", "world"));
console.log(webGenericFunction({ name: 'Alice' }, 30));
//# sourceMappingURL=index.js.map