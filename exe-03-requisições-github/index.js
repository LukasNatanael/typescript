var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var users = [];
function fetchUser(username) {
    return __awaiter(this, void 0, void 0, function () {
        var response, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    user = _a.sent();
                    if (user.message) {
                        console.log("Usu\u00E1rio n\u00E3o encontrado!");
                    }
                    else {
                        users.push(user);
                        console.log("O usu\u00E1rio ".concat(user.login, " foi salvo.\n"), "\nId: ".concat(user.id) +
                            "\nLogin: ".concat(user.login) +
                            "\nNome: ".concat(user.name) +
                            "\nBio ".concat(user.bio) +
                            "\nReposit\u00F3rios p\u00FAblicos: ".concat(user.public_repos, "\n"));
                        // showAllUser()
                        // showRepositoresTotal()
                        showTopFive();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function showUser(username) {
    return __awaiter(this, void 0, void 0, function () {
        var user, response, respositories, message_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = users.find(function (user) { return user.login === username; });
                    if (!(typeof user === 'undefined')) return [3 /*break*/, 1];
                    console.log("Usu\u00E1rio ".concat(username, " n\u00E3o encontrado!"));
                    return [3 /*break*/, 4];
                case 1: return [4 /*yield*/, fetch(user.repos_url)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    respositories = _a.sent();
                    message_1 = "\nId: ".concat(user.id) +
                        "\nLogin: ".concat(user.login) +
                        "\nNome: ".concat(user.name) +
                        "\nBio ".concat(user.bio) +
                        "\nReposit\u00F3rios p\u00FAblicos: ".concat(user.public_repos, "\n");
                    respositories.forEach(function (repository) {
                        message_1 +=
                            "\nNome: ".concat(repository.name) +
                                "\nDescri\u00E7\u00E3o: ".concat(repository.description) +
                                "\nEstrelas: ".concat(repository.stargazers_count) +
                                "\n\u00C9 um fork: ".concat(repository.fork ? 'Sim' : 'Não', "\n");
                    });
                    console.log(message_1);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function showAllUsers() {
    var message = '\nUsuários:\n';
    users.forEach(function (user) { return message += "    - ".concat(user.login, "\n"); });
    console.log(message);
}
function showRepositoresTotal() {
    var totalRepositories = users.reduce(function (accumulator, user) { return accumulator + user.public_repos; }, 0);
    console.log("O grupo possui um total de ".concat(totalRepositories, " reposit\u00F3rios p\u00FAblicos!\n"));
}
function showTopFive() {
    var topFive = users.slice().sort(function (currentUser, nextUser) { return nextUser.public_repos - currentUser.public_repos; }).slice(0, 5);
    var message = 'Top 5 usuários com mais repositórios:\n';
    topFive.forEach(function (user, index) { return message += "  ".concat(index + 1, " - ").concat(user.login, ": ").concat(user.public_repos, " reposit\u00F3rios.\n"); });
    console.log(message);
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    return [4 /*yield*/, fetchUser('LukasNatanael')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fetchUser('isaacpontes')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fetchUser('julianaconde')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fetchUser('pcaldas')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, fetchUser('lucasqueirogaa')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, showUser('LukasNatanael')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, showUser('isaacpontes')];
                case 7:
                    _a.sent();
                    showAllUsers();
                    showRepositoresTotal();
                    showTopFive();
                    return [2 /*return*/];
            }
        });
    });
}
main();
