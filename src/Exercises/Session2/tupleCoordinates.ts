//Tuple Syntax: 
// let newTuple: [string, string] = ["23.78N", "77.261E"];
// console.log(newTuple);

type OurTypes = [number, number];

function ourCords(latitude: number, longitude: number) {
    // console.log(`Location coordinates: ${latitude}° N, ${longitude}° E`)
    let a: OurTypes = [latitude, longitude];
    return console.log(`Location coordinates: ${a[0]}° N, ${a[1]}° E`)
}

//Calling function
ourCords(23, 45);


/*
Scenario:
Your company stores location data as a tuple of [latitude, longitude]. Write a function that accepts this tuple and logs the location like:

Location coordinates: 6.5244° N, 3.3792° E

Instructions:
Create a tuple type alias for coordinates.

Use that alias as the parameter type in the function.

The function should not return anything.
*/