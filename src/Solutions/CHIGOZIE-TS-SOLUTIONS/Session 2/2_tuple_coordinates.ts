// my solution 2
type CoordinatesJoints = [number, number];

function logLocation(mycords: CoordinatesJoints): void {
  console.log(`Location coordinates: ${mycords[0]}° N, and  ${mycords[1]}° E`);
}

logLocation([6.5244, 3.3792]);
