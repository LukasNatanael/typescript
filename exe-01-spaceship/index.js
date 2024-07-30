"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
console.clear();
var input = promptSync();
var spaceships = [];
var saveSpaceship = function (name, pilot, crewLimit, crew, inMission) {
    var crews = crew.split(',');
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crews: crews,
        inMission: inMission
    };
    console.log("".concat(spaceship.name, " was saved with sucessful!"));
    spaceships.push(spaceship);
    return spaceship;
};
var addCreaw = function () { };
var sendToMission = function () { };
var listSpaceships = function () {
    spaceships.forEach(function (ship) {
        console.log({
            name: ship.name,
            inMission: ship.inMission
        });
    });
};
var fireStar = saveSpaceship('Fire Star', 'LK Big', 30, 'John Doe, Ciclano Silva', false);
var iceStar = saveSpaceship('Ice Star', 'VT', 30, 'Lukas, João', false);
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
