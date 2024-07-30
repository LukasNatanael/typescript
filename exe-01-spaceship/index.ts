import * as promptSync from 'prompt-sync'

const input = promptSync()

const spaceships: any[] = []

const saveSpaceship = ( name:string, pilot:string, crewLimit:number, crew:string[], inMission:false ) => {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew,
        inMission
    }

    console.log(`${spaceship.name} was saved with sucessful!`)
    spaceships.push( spaceship )
    return spaceship
}
const addCreaw = () => {}
const sendToMission = () => {}
const listSpaceships = () => {}

const fireStar = saveSpaceship( 'Fire Star', 'LK Big', 30, [ 'John Doe', 'Ciclano Silva' ], false )
console.log(fireStar)

const spaceshipName      = input('Informe o nome da nave: ')
const spaceshipPilot     = input('Informe o nome do piloto: ')
const spaceshipCrewLimit = Number(input('Informe o número máximo de tripulantes: '))
const spaceshipCrews     = input('Informe o nome dos tripulantes (separando os por vírgula): ')

const spaceshipOne = saveSpaceship( 
    spaceshipName,
    spaceshipPilot,
    spaceshipCrewLimit,
    spaceshipCrews,
    false
)

