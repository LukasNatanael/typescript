import * as promptSync from 'prompt-sync'

console.clear()
const input = promptSync()
const spaceships: any[] = []

const saveSpaceship = ( name:string, pilot:string, crewLimit:number, crew:string, inMission?:false ) => {

    const crews = crew.split(',')
    
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crews,
        inMission
    }

    console.log(`${spaceship.name} was saved with sucessful!`)
    spaceships.push( spaceship )
    return spaceship
}
const addCreaw = () => {}
const sendToMission = () => {}
const listSpaceships = () => {
    spaceships.forEach( ship => {
        console.log({
            name: ship.name,
            inMission: ship.inMission 
        })
    } )
}

const fireStar = saveSpaceship( 'Fire Star', 'LK Big', 30, 'John Doe, Ciclano Silva', false )
const iceStar = saveSpaceship( 'Ice Star', 'VT', 30, 'Lukas, João' , false )

// console.clear()
// const spaceshipName      = input('Informe o nome da nave: ')
// const spaceshipPilot     = input('Informe o nome do piloto: ')
// const spaceshipCrewLimit = Number(input('Informe o número máximo de tripulantes: '))
// const spaceshipCrews     = input('Informe o nome dos tripulantes (separando os por vírgula): ')

// const spaceshipOne = saveSpaceship( 
//     spaceshipName,
//     spaceshipPilot,
//     spaceshipCrewLimit,
//     spaceshipCrews
// )

listSpaceships()