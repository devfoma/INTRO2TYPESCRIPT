/* Tuples

### Scenario:
Your company stores location data as a tuple of [latitude, longitude].
Write a function that accepts this tuple and logs the location like:

Location coordinates: 6.5244° N, 3.3792° E


### Instructions:

Create a tuple type alias for coordinates.

Use that alias as the parameter type in the function.

The function should not return anything.*/
function logLocation(coords) {
    console.log(`Location coordinates: ${coords[0]}° N, ${coords[1]}° E`);
}
export {};
//# sourceMappingURL=tuple_coordinates.js.map