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
function confirmation() {
    var confirmation;
    var validConfirmation = false;
    while (!validConfirmation) {
        var confirmationInput = prompt('[S] Sim [N] Não: ');
        switch (confirmationInput) {
            case 'Sim':
                confirmation = 'Sim';
                validConfirmation = true;
                break;
            case 'Não':
                confirmation = 'Não';
                validConfirmation = true;
                break;
            case 's':
                confirmation = 's';
                validConfirmation = true;
                break;
            case 'n':
                confirmation = 'n';
                validConfirmation = true;
                break;
            default:
                console.log('A opção informada é inválida! Por favor verifique e tente novamente.');
                break;
        }
    }
    return confirmation;
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
        console.log('\nInforme a situação do planeta: \n' +
            '1. Habitado \n' +
            '2. Habitável \n' +
            '3. Inabitável \n' +
            '4. Inesplorado \n');
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
function registerPlanet() {
    var planet = prompt('Informe o nome do planeta: ');
    var coordA = prompt('Informe a coordenada A: ');
    var coordB = prompt('Informe a coordenada B: ');
    var coordC = prompt('Informe a coordenada C: ');
    var coordD = prompt('Informe a coordenada D: ');
    var situation = validateSituation();
    console.log("\nConfirmar o registro do planeta ".concat(planet, " ? \n") +
        "Coordenadas: (".concat(coordA, ", ").concat(coordB, ", ").concat(coordC, ", ").concat(coordD, ") \n") +
        "Situa\u00E7\u00E3o: ".concat(situation, " \n"));
    var conf = confirmation();
    if (conf) {
        addPlanet(planet, [coordA, coordB, coordC, coordD], situation);
    }
}
function updatePlanet() {
    validPlanet(function (planet) {
        var situation = validateSituation();
        updateSituation(situation, planet);
    });
}
function listPlanets() {
    var list = 'Planetas: \n';
    planets.forEach(function (planet) {
        var _a = planet.coordinates, a = _a[0], b = _a[1], c = _a[2], d = _a[3];
        list +=
            "   Nome: ".concat(planet.name, " \n") +
                "   Coordenadas: (".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ") \n") +
                "   Situa\u00E7\u00E3o: ".concat(planet.situation, " \n") +
                "   Satelites (".concat(planet.satellites.length, "): \n");
        planet.satellites.forEach(function (satellite) { return list += "       - ".concat(satellite, " \n"); });
    });
    console.log(list);
}
function menu() {
    var menu = 'Menu\n' +
        '1. Registrar um novo planeta\n' +
        '2. Atualizar situação do planeta\n' +
        '3. Adicionar satélite ao planeta\n' +
        '4. Remover um satélite do planeta\n' +
        '5. Listar todos os planetas\n' +
        '6. Sair\n';
    var userOption = 0;
    while (userOption != 6) {
        console.clear();
        console.log(menu);
        userOption = Number(prompt('Informe uma opção: '));
        switch (userOption) {
            case 1:
                console.clear();
                registerPlanet();
                break;
            case 2:
                console.clear();
                updatePlanet();
                break;
            case 3:
                console.clear();
                validPlanet(function (planet) {
                    var satellite = prompt('Informe o nome do satélite a ser adicionado: ');
                    addSatellite(satellite, planet);
                });
                break;
            case 4:
                console.clear();
                validPlanet(function (planet) {
                    var satellite = prompt('Informe o nome do satélite a ser removido: ');
                    removeSatellite(satellite, planet);
                });
                break;
            case 5:
                console.clear();
                listPlanets();
                break;
            case 6:
                break;
            default:
                console.log('Programa encerrado!');
        }
    }
}
menu();
