"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Turbo -> Decorator:
        Um decorator é basicamente um função que subtitui outra função/método de uma classe,
        ou serve como forma de implementação na mesma

*/
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-');
            console.log(`Chamando o método: [${key}] com os parâmetros ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`O método [${key}] retornou o valor: ${JSON.stringify(result)}`);
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-');
            return result;
        };
    };
}
function Turbo() {
    return function (target, key, descriptor) {
        descriptor.value = function (speedValue) {
            this.speed = speedValue + 50;
            console.log(`Turbo mode! Now you are at ${this.speed}km/h`);
        };
    };
}
class Spaceship {
    constructor(name, pilot) {
        this.name = name;
        this.pilot = pilot;
    }
    acellerate(speedValue) {
        this.speed = speedValue;
        console.log(`Now you are at ${this.speed}km/h`);
    }
    breakShip() {
        this.speed = 0;
        console.log('Your spaceship are stoped!');
    }
}
__decorate([
    Log(),
    Turbo()
], Spaceship.prototype, "acellerate", null);
__decorate([
    Log()
], Spaceship.prototype, "breakShip", null);
console.clear();
const xWing = new Spaceship('X-Wing', 'Luke Skywalker');
xWing.acellerate(20);
xWing.breakShip();
