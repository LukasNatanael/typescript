// type      -> objeto
// interface -> classe

interface CelestialBody {
    name: string,
    mass: number
}

interface Star extends CelestialBody {
    age: number,
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number,
    createSatellite: (name: string) => void
}

let sun: Star
sun.name = 'Sol'
sun.mass = 10 ** 6

class MilkWayPlanet implements Planet {
    name: string
    mass:  number
    population: number

    constructor( name: string, mass: number, population: number ) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite(name: string) {
        // ...
    }
}

// permite a implementação de atributos após sua declaração
interface Planet {
    satellite?: string[]
}