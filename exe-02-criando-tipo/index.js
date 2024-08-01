"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name: name,
        coordinates: coordinates,
        situation: situation,
        satellites: []
    });
    console.log("O planeta ".concat(name, " foi registrado com sucesso!"));
}
function findPlanet(name) {
    var planet = planets.find(function (planet) { return planet.name === name; });
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    console.log("A situa\u00E7\u00E3o do planeta ".concat(planet.name, " foi alterada para  ").concat(situation));
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    console.log("O sat\u00E9lite ".concat(name, " foi adicionado ao planeta ").concat(planet.name));
}
function removeSatellite(name, planet) {
    planet.satellites.filter(function (satellite) { return satellite !== name; });
    console.log("O sat\u00E9lite ".concat(name, " foi removido do planeta ").concat(planet.name));
}
function validateSituation() {
    var situation = 'Inexplorado';
    var validSituation = false;
    while (!validSituation) {
        console.log('1. Habitado' +
            '2. Habitável' +
            '3. Inabitável' +
            '4. Inesplorado');
        var situationInput = Number(prompt('Informe a situação do planeta: '));
        switch (situationInput) {
            case 1:
                situation = 'Habitado';
                validSituation = true;
                break;
            case 2:
                situation = 'Habitável';
                validSituation = true;
                break;
            case 3:
                situation = 'Inabitável';
                validSituation = true;
                break;
            case 4:
                situation = 'Inexplorado';
                validSituation = true;
                break;
            default:
                console.log('A opção informada é inválida! Por favor verifique e tente novamente.');
                break;
        }
    }
    return situation;
}
function validPlanet(callbackFunction) {
    var planetName = prompt('Informe o nome do planeta: ');
    var planet = findPlanet(planetName);
    if (planet) {
        callbackFunction(planet);
    }
    else {
        console.log('Planeta não encontrado! Informe um planeta válido.');
    }
}
function setCoordinates() {
    var planetName = prompt('Informe o nome do planeta: ');
    var coordA = prompt('Informe a coordenada A: ');
    var coordB = prompt('Informe a coordenada B: ');
    var coordC = prompt('Informe a coordenada C: ');
    var coordD = prompt('Informe a coordenada D: ');
    var planet = findPlanet(planetName);
    // const confirmation = validPlanet(planet)
}
