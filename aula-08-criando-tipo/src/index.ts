// literals => são como constantes
let pi: 3.14

// unions => define valores padrões para uma variável, como se fossem opções 
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let homePlanet: Planet
homePlanet = 'Terra'

function checkPlanet( planet: Planet ) {
    if (planet === 'Terra') {
        console.log('Estamos no nosso planeta natal!')
    }
}

// alias => são tipos que recebem funcões
type GreatingCallback = (name: string) => void

function greet( callbackFunction: GreatingCallback ) {
    const name = 'Lukas'
    callbackFunction(name)
}