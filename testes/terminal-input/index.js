"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
console.clear();
var input = promptSync();
var name = input('Please inform your name: ');
var age = input('Please inform your age: ');
var email = input('Please inform your email: ');
var data = { name: name, age: age, email: email };
console.clear();
console.table(data);
