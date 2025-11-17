// // Generics

// // arrow function
// const myFunction = (arg: string): string => arg

// // traditional function
// function ourFunction ( arg: string): string {
//     return arg
// }

// // generic function
// function ourFunctionGeneric<myGenericType> (arg: myGenericType): myGenericType{
//     return arg
// }

// console.log(myFunction("Hello Generics"))
// console.log(ourFunction("Hello Generics"))
// console.log(ourFunctionGeneric<boolean>(true))


// a generic is like creating a template for a function or a class

interface HtmlElement {
    height: number;
    width: number;
    div: string;
    p: string;
}

function webGenericFunction<Type1 extends HtmlElement, Type2 >(valOne: Type1, valTwo: Type2): [Type1, Type2] {
    return [valOne, valTwo]
}

console.log(webGenericFunction<HtmlElement, string>({height: 39, width: 40, div: "example", p: "web2 class"}, "40.9"))
// console.log(webGenericFunction<string, string>("Hello", "World"))
console.log(webGenericFunction<HtmlElement, number>({height: 50, width: 60, div: "example2", p: "web2 class"}, 25))