"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    console.clear();
    console.log("A nave ".concat(spaceship.name, " foi registrada com sucesso!"));
}
function findSpaceship(name) {
    var spaceship;
    return spaceships.find(function (ship) { return ship.name === name; });
}
function addCrewMember(member, spaceship) {
    console.clear();
    if (spaceship.crew.length >= spaceship.crewLimit) {
        console.log("N\u00E3o foi poss\u00EDvel adicionar ".concat(member, " a tripula\u00E7\u00E3o pois, a nave se encontra cheia no momento."));
    }
    else {
        spaceship.crew.push(member);
        console.log("".concat(member, " agora faz parte da tripula\u00E7\u00E3o de ").concat(spaceship.name, "!"));
    }
}
function sendInMission(spaceship) {
    console.clear();
    if (spaceship.inMission) {
        console.log("N\u00E3o foi poss\u00EDvel enviar a nave ".concat(spaceship.name, " pois, ela j\u00E1 est\u00E1 em miss\u00E3o."));
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        console.log("N\u00E3o foi poss\u00EDvel enviar a nave ".concat(spaceship.name, ". Tripula\u00E7\u00E3o insuficiente."));
    }
    else {
        console.log("".concat(spaceship.name, " foi enviada em uma miss\u00E3o!"));
        spaceship.inMission = true;
    }
}
function registerSpaceship() {
    var name = prompt('Informe o nome da nave a ser registrada: ');
    var pilot = prompt("Informe o nome do piloto da ".concat(name, ": "));
    var crewLimit = Number(prompt("Informe o n\u00FAmero m\u00E1ximo de tripulantes que a ".concat(name, " suporta: ")));
    console.clear();
    console.log("Deseja confirmar o registro da nave ".concat(name, "\nPiloto: ").concat(pilot, "\nLimite de tripula\u00E7\u00E3o: ").concat(crewLimit, "\n"));
    var confirmation = prompt('[S] Sim [N] Não: ');
    if (confirmation.toLowerCase() === 's') {
        addSpaceship(name, pilot, crewLimit);
    }
    else {
        console.log("N\u00E3o foi poss\u00EDvel adicionar ".concat(name, " a esta\u00E7\u00E3o de naves."));
    }
}
function addMemberToSpaceship() {
    console.clear();
    console.log('Adicionar membro');
    var member = prompt('Informe o nome do tripulante: ');
    var spaceshipName = prompt("Para qual nave ".concat(member, " dever\u00E1 ser designado: "));
    var spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        console.log("\nDeseja confirmar a inclus\u00E3o de ".concat(member, " a tripula\u00E7\u00E3o de ").concat(spaceship.name));
        var confirmation = prompt('[S] Sim [N] Não: ');
        if (confirmation.toLowerCase() === 's') {
            addCrewMember(member, spaceship);
        }
    }
    else {
        console.log("N\u00E3o foi poss\u00EDvel localizar ".concat(spaceshipName));
    }
}
function listSpaceship() {
    console.clear();
    if (spaceships.length === 0) {
        console.log('Não há naves registradas no momento.\n ');
    }
    else {
        var list_1 = "Naves registradas: \n";
        spaceships.forEach(function (spaceship) {
            list_1 +=
                "   Nave: ".concat(spaceship.name, "\n") +
                    "   Piloto: ".concat(spaceship.pilot, "\n") +
                    "   Limite de tripulantes: ".concat(spaceship.crewLimit, "\n") +
                    "   Tripulantes (".concat(spaceship.crew.length, "): \n");
            spaceship.crew.forEach(function (member) {
                list_1 += "      - ".concat(member, " \n");
            });
        });
        console.log(list_1);
    }
}
function menu() {
    var userOption = 0;
    while (userOption != 5) {
        var menuOption = 'Painel principal\n\n' +
            '1. Registar nova nave\n' +
            '2. Adicionar novo tripulante\n' +
            '3. Enviar nave em missão\n' +
            '4. Listar naves registradas\n' +
            '5. Encerrar\n';
        console.clear();
        console.log(menuOption);
        userOption = parseInt(prompt('Opção: '));
        switch (userOption) {
            case 1:
                console.clear();
                registerSpaceship();
                break;
            case 2:
                console.clear();
                addMemberToSpaceship();
                break;
            case 3:
                console.clear();
                var spaceshipName = prompt('Informe qual nave você gostaria de enviar em uma missão: ');
                var spaceship = findSpaceship(spaceshipName);
                sendInMission(spaceship);
                break;
            case 4:
                console.clear();
                listSpaceship();
                prompt('Voltar ao menu [enter] ');
                break;
            case 5:
                console.clear();
                console.log('Programa encerrado!');
                break;
        }
    }
}
menu();
