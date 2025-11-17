// ## 2. Tuples

// ### Scenario:
// Your company stores location data as a tuple of [latitude, longitude].
// Write a function that accepts this tuple and logs the location like:

// Location coordinates: 6.5244° N, 3.3792° E


// ### Instructions:

// Create a tuple type alias for coordinates.

// Use that alias as the parameter type in the function.

// The function should not return anything.

type coordinates = [number, number];

function location (coord: coordinates): undefined {
    console.log(`Location coordinates: ${coord[0]}° N, ${coord[1]}° E`)
}
console.log (location([6.5244,3.3792]))
