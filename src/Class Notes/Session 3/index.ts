// // Generics

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

function webGenericFunction<Type1,Type2>(valone:Type1, valtwo:Type2):[Type1,Type2]{
    return[valone,valtwo]
}

console.log(webGenericFunction<boolean,string>(true,"Hello Generics"))
console.log(webGenericFunction<string,string>("Hello","world"))
console.log(webGenericFunction<object, number >({name:'Alice'},30))
