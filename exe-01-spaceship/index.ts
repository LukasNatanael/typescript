import * as promptSync from 'prompt-sync'

console.clear()
const input = promptSync()
const spaceships: any[] = []

const addSpaceship = ( name:string, pilot:string, crewLimit:number) => {

    // const crews = crew.split(', ')
    
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew:[],
        inMission: false
    }

    spaceships.push( spaceship )
    console.log(`${spaceship.name} was saved with sucessful!`)
    return spaceship
}

const addCreaw = ( spaceship: {name:string, pilot:string, crewLimit:number, crews:any}, crewName:string ) => {
    let newCrews = crewName.split(', ')
    try {
        const crews = spaceship.crews.split(', ')
        if ( newCrews.length <= spaceship.crewLimit ) {
            crews.push( ...newCrews )
            spaceship.crews = crews

            console.log('\nTabela de tripulantes')
            console.table( spaceship.crews )
        }
        else {
            console.log( 'O número máximo de tripulantes foi excedido. Por favor, remova algum tripulante.' )
        }
    }
    catch {
        if ( newCrews.length <= spaceship.crewLimit ) {
            spaceship.crews.push(...newCrews)
            
            console.log('\nTabela de tripulantes')
            console.table( spaceship.crews )
        }
        else {
            console.log( 'O número máximo de tripulantes foi excedido. Por favor, remova algum tripulante.' )
        }
    }

    

}

const sendToMission = ( spaceship:any ) => {
    spaceship.inMission = true

    console.log(`A espaçonave ${spaceship.name} foi enviada para uma missão!`)
}

const listSpaceships = () => {
    spaceships.forEach( ship => {
        console.log({
            name: ship.name,
            inMission: ship.inMission 
        })
    } )
}

// const fireStar = saveSpaceship( 'Fire Star', 'LK Big', 30, 'John Doe, Ciclano Silva' )
// sendToMission(fireStar)
// addCreaw( fireStar, 'Matheus, Jorge, Ryan, Bryan' )
// addCreaw( saveSpaceship( 'Ice Star', 'VT', 30, 'Lukas, João') , 'Ciclano da Silva' )


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