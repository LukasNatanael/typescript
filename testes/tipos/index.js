// criar uma classe user que implementa a interface Person
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_name, _Person_phoneNumber, _Person_cpf;
function formatter(data) {
    var dataFormat;
    try {
        var number = data.match(/\D+/g);
        number === null || number === void 0 ? void 0 : number.forEach(function (simbol) {
            data = data.replace(simbol, '');
        });
        dataFormat = parseInt(data);
    }
    catch (_a) {
        dataFormat = parseInt(data);
    }
    return dataFormat;
}
var Person = /** @class */ (function () {
    function Person(name, phoneNumber, cpf) {
        _Person_name.set(this, void 0);
        _Person_phoneNumber.set(this, void 0);
        _Person_cpf.set(this, void 0);
        __classPrivateFieldSet(this, _Person_name, name, "f");
        __classPrivateFieldSet(this, _Person_phoneNumber, formatter(phoneNumber), "f");
        __classPrivateFieldSet(this, _Person_cpf, formatter(cpf), "f");
    }
    return Person;
}());
_Person_name = new WeakMap(), _Person_phoneNumber = new WeakMap(), _Person_cpf = new WeakMap();
console.clear();
var lukas = new Person('Lukas', '(19) 97104-4160', '565.192.758-16');
console.log(lukas.phoneNumber);
