import * as _ from 'lodash';
let xwing = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weaponsBullet: 150
};
/*
    serve para informar tipos de bibliotecas desenvolvidas em typescript
        - basicamente "adiciona" o autocomplete de determinada biblioteca
        exemplo:
            npm i --save-dev @types/lodash
            - forne autocomplete a biblioteca loadash pois, ela foi desenvolvida em TS logo, não possui tipos declarados
*/
console.log(_.camelCase(xwing.pilot));
console.log(_.kebabCase(xwing.pilot));
console.log(_.snakeCase(xwing.pilot));
