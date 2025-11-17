//  Session 2 - Task 2
//   Topic: Tuples
//   Represent location as latitude and longitude.


// Type alias for coordinates tuple
type Coordinates = [number, number];

function logLocation(coords: Coordinates): void {
  console.log(`Location coordinates: ${coords[0]}° N, ${coords[1]}° E`);
}

logLocation([6.5244, 3.3792]);