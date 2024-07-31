"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
console.clear();
var input = promptSync();
var spaceships = [];
var saveSpaceship = function (name, pilot, crewLimit, crew, inMission) {
    var crews = crew.split(', ');
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crews: crews,
        inMission: false
    };
    console.log("".concat(spaceship.name, " was saved with sucessful!"));
    spaceships.push(spaceship);
    return spaceship;
};
var addCreaw = function (spaceship, crewName) {
    var _a;
    var newCrews = crewName.split(', ');
    try {
        var crews = spaceship.crews.split(', ');
        if (newCrews.length <= spaceship.crewLimit) {
            crews.push.apply(crews, newCrews);
            spaceship.crews = crews;
            console.log('\nTabela de tripulantes');
            console.table(spaceship.crews);
        }
        else {
            console.log('O número máximo de tripulantes foi excedido. Por favor, remova algum tripulante.');
        }
    }
    catch (_b) {
        if (newCrews.length <= spaceship.crewLimit) {
            (_a = spaceship.crews).push.apply(_a, newCrews);
            console.log('\nTabela de tripulantes');
            console.table(spaceship.crews);
        }
        else {
            console.log('O número máximo de tripulantes foi excedido. Por favor, remova algum tripulante.');
        }
    }
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
    console.log("A espa\u00E7onave ".concat(spaceship.name, " foi enviada para uma miss\u00E3o!"));
};
var listSpaceships = function () {
    spaceships.forEach(function (ship) {
        console.log({
            name: ship.name,
            inMission: ship.inMission
        });
    });
};
var fireStar = saveSpaceship('Fire Star', 'LK Big', 30, 'John Doe, Ciclano Silva');
sendToMission(fireStar);
addCreaw(fireStar, 'Matheus, Jorge, Ryan, Bryan');
addCreaw(saveSpaceship('Ice Star', 'VT', 30, 'Lukas, João'), 'Ciclano da Silva');
// console.clear()
// const spaceshipName      = input('Informe o nome da nave: ')
// const spaceshipPilot     = input('Informe o nome do piloto: ')
// const spaceshipCrewLimit = Number(input('Informe o número máximo de tripulantes: '))
// const spaceshipCrews     = input('Informe o nome dos tripulantes (separando os por vírgula): ')
// const spaceshipOne = saveSpaceship( 
//     spaceshipName,
//     spaceshipPilot,
//     spaceshipCrewLimit,
//     spaceshipCrews
// )
listSpaceships();
