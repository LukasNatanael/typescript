"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var input = promptSync();
var spaceships = [];
var saveSpaceship = function (name, pilot, crewLimit, crew, inMission) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: crew,
        inMission: inMission
    };
    console.log("".concat(spaceship.name, " was saved with sucessful!"));
    spaceships.push(spaceship);
    return spaceship;
};
var addCreaw = function () { };
var sendToMission = function () { };
var listSpaceships = function () { };
var fireStar = saveSpaceship('Fire Star', 'LK Big', 30, ['John Doe', 'Ciclano Silva'], false);
console.log(fireStar);
var spaceshipName = input('Informe o nome da nave: ');
var spaceshipPilot = input('Informe o nome do piloto: ');
var spaceshipCrewLimit = Number(input('Informe o número máximo de tripulantes: '));
var spaceshipCrews = input('Informe o nome dos tripulantes (separando os por vírgula): ');
var spaceshipOne = saveSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit, spaceshipCrews, false);
