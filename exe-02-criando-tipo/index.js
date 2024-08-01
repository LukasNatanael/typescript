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
