// type      -> objeto
// interface -> classe
let sun;
sun.name = 'Sol';
sun.mass = 10 ** 6;
class MilkWayPlanet {
    name;
    mass;
    population;
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        // ...
    }
}
