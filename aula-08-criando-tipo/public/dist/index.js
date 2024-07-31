// literals => são como constantes
let pi;
let homePlanet;
homePlanet = 'Terra';
function checkPlanet(planet) {
    if (planet === 'Terra') {
        console.log('Estamos no nosso planeta natal!');
    }
}
function greet(callbackFunction) {
    const name = 'Lukas';
    callbackFunction(name);
}
