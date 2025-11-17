
// 2. TUPLES - LOCATION COORDINATES

type Coordinates = [number, number];

function printLocation(coords: Coordinates): void {
    const [latitude, longitude] = coords;

    console.log(`Location coordinates: ${latitude}° N, ${longitude}° E`);
}

const lagosLocation: Coordinates = [6.5244, 3.3792];

printLocation(lagosLocation);
