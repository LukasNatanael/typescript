import * as promptSync from 'prompt-sync'
const prompt = promptSync()

type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'
type PlanetCoordinates = [ number, number, number, number ]
type confirmationOptions = 'Sim' | 'S' | 'Não' | 'N'

type Planet = {
    name: string
    coordinates: PlanetCoordinates
    situation: PlanetSituation
    satellites:string[]
}

const planets: Planet[] = []

function addPlanet( name:string, coordinates:PlanetCoordinates, situation:PlanetSituation ) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites:[]
    })

    console.log(`O planeta ${name} foi registrado com sucesso!`)
}

function findPlanet( name:string ) {
    const planet = planets.find( planet => planet.name === name )
    return planet ?? false
}

function confirmation() {

    let confirmation: confirmationOptions
    let validConfirmation = false

    while(!validConfirmation) {
        const confirmationInput = prompt('[S] Sim [N] Não: ')

        switch(confirmationInput) {
            case 'Sim':
                confirmation = 'Sim'
                validConfirmation = true
                break               
            case 'Não':
                confirmation = 'Não'
                validConfirmation = true
                break               
            case 'S':
                confirmation = 'S'
                validConfirmation = true
                break               
            case 'N':
                confirmation = 'N'
                validConfirmation = true
                break
            default:
                console.log('A opção informada é inválida! Por favor verifique e tente novamente.')
                break      
        }
    }

    return confirmation

}

function updateSituation( situation: PlanetSituation, planet: Planet ) {
    planet.situation = situation
    console.log(`A situação do planeta ${planet.name} foi alterada para  ${situation}`)
}

function addSatellite( name:string, planet:Planet ) {
    planet.satellites.push(name)
    console.log(`O satélite ${name} foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite( name: string, planet: Planet ) {
    planet.satellites.filter( satellite => satellite !== name  )
    console.log(`O satélite ${name} foi removido do planeta ${planet.name}`)

}

function validateSituation() {
    let situation: PlanetSituation = 'Inexplorado'
    let validSituation = false

    while(!validSituation) {
        console.log(
            '1. Habitado \n'   +
            '2. Habitável \n'  +
            '3. Inabitável \n' +
            '4. Inesplorado \n')
        const situationInput = Number(prompt('Informe a situação do planeta: '))
        switch(situationInput) {
            case 1:
                situation = 'Habitado'
                validSituation = true
                break               
            case 2:
                situation = 'Habitável'
                validSituation = true
                break               
            case 3:
                situation = 'Inabitável'
                validSituation = true
                break               
            case 4:
                situation = 'Inexplorado'
                validSituation = true
                break
            default:
                console.log('A opção informada é inválida! Por favor verifique e tente novamente.')
                break      
        }
    }

    return situation
}

function validPlanet( callbackFunction: (planet: Planet) => void ) {
    const planetName = prompt('Informe o nome do planeta: ')
    const planet = findPlanet(planetName)

    if(planet) {
        callbackFunction(planet)
    }
    else {
        console.log('Planeta não encontrado! Informe um planeta válido.')
    }
}

function setCoordinates() {
    const planet = prompt('Informe o nome do planeta: ')
    const coordA     = prompt('Informe a coordenada A: ')
    const coordB     = prompt('Informe a coordenada B: ')
    const coordC     = prompt('Informe a coordenada C: ')
    const coordD     = prompt('Informe a coordenada D: ')

    const situation = validateSituation()
    
    console.log(
        `Confirmar o registro do planeta ${planet} ? \n` +
        `Coordenadas: (${coordA}, ${coordB}, ${coordC}, ${coordD}) \n`+
        `Situação: ${situation} \n`
    )

    const conf = confirmation()

    if (conf) {
        addPlanet( planet, [coordA, coordB, coordC, coordD], situation )
    }
}
