type locatioAliase = [number, number]

function locationFunction(location: locatioAliase): void{
    const [latitude, longitude] = location

    const lat = latitude >= 0 ? "N" : "S"
    const long = longitude >= 0 ? "E" : "W"

    console.log(`Location coodinates: ${Math.abs(latitude)}° ${lat}, ${Math.abs(longitude)}° ${long}`)
}
