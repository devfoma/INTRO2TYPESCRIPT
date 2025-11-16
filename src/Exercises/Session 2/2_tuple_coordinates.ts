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

const location = (cords: coordinates): void => {
    const [latitude, longitude] = cords;
    console.log(`Location coordinates: ${latitude}° N, ${longitude}° E`);
};

const Abuja: coordinates = [6.5244, 3.3792];
location(Abuja);
const Lagos: coordinates = [7.2233, 5.2332];
location(Lagos);

