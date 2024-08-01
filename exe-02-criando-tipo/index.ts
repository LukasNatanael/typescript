import * as promptSync from 'prompt-sync'
const prompt = promptSync()

type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'
type PlanetCoordinates = [ number, number, number, number ]

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
            '1. Habitado'   +
            '2. Habitável'  +
            '3. Inabitável' +
            '4. Inesplorado')
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
    const planetName = prompt('Informe o nome do planeta: ')
    const coordA     = prompt('Informe a coordenada A: ')
    const coordB     = prompt('Informe a coordenada B: ')
    const coordC     = prompt('Informe a coordenada C: ')
    const coordD     = prompt('Informe a coordenada D: ')

    const planet = findPlanet(planetName)
    
    // const confirmation = validPlanet(planet)
}