import * as promptSync from 'prompt-sync'

const prompt = promptSync()

const spaceships = []

function addSpaceship( name:string, pilot:string, crewLimit:number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew:[],
        inMission: false
    }
    spaceships.push( spaceship )
    
    console.clear()
    console.log( `A nave ${spaceship.name} foi registrada com sucesso!` )
}

function findSpaceship( name:string ) {
    let spaceship: {
        name:      string,
        pilot:     string,
        crewLimit: number,
        crew:      string[],
        inMission: boolean
    }

    return spaceships.find( ship => ship.name === name )
}

function addCrewMember( member:string, spaceship:{ name:string, crewLimit:number, crew:string[] } ) {
    console.clear()
    if( spaceship.crew.length >= spaceship.crewLimit ) {
        console.log( `Não foi possível adicionar ${member} a tripulação pois, a nave se encontra cheia no momento.` )
    }
    else {
        spaceship.crew.push( member )
        console.log( `${member} agora faz parte da tripulação de ${spaceship.name}!` )
    }

}

function sendInMission( spaceship:{ name:string, crewLimit:number, crew:string[], inMission:boolean } ) {
    console.clear()

    if ( spaceship.inMission ) {
        console.log(`Não foi possível enviar a nave ${spaceship.name} pois, ela já está em missão.`)
    }
    else if( spaceship.crew.length  < Math.floor(spaceship.crewLimit / 3) ) {
        console.log( `Não foi possível enviar a nave ${spaceship.name}. Tripulação insuficiente.` )
    }
    else {
        console.log( `${spaceship.name} foi enviada em uma missão!` )
        spaceship.inMission = true
    }
}

function registerSpaceship() {
    const name  = prompt( 'Informe o nome da nave a ser registrada: ' )
    const pilot = prompt( `Informe o nome do piloto da ${name}: ` )
    const crewLimit = Number(prompt( `Informe o número máximo de tripulantes que a ${name} suporta: ` ))

    console.clear()
    console.log(`Deseja confirmar o registro da nave ${name}\nPiloto: ${pilot}\nLimite de tripulação: ${crewLimit}\n`)
    const confirmation = prompt('[S] Sim [N] Não: ')

    if (confirmation.toLowerCase() === 's') {
        addSpaceship( name, pilot, crewLimit )
    }
    else {
        console.log( `Não foi possível adicionar ${name} a estação de naves.` )
    }
}

function addMemberToSpaceship() {
    console.clear()
    console.log('Adicionar membro')
    const member    = prompt('Informe o nome do tripulante: ')
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado: `)

    const spaceship = findSpaceship(spaceshipName)

    if ( spaceship ) {
        console.log(`\nDeseja confirmar a inclusão de ${member} a tripulação de ${spaceship.name}`)

        const confirmation = prompt('[S] Sim [N] Não: ')
        if ( confirmation.toLowerCase() === 's' ) {
            addCrewMember( member, spaceship )
        }
    }
    else {
        console.log(`Não foi possível localizar ${spaceshipName}`)
    }
}

function listSpaceship() {
    console.clear()
    if ( spaceships.length === 0 ) {
        console.log('Não há naves registradas no momento.\n ')
    }
    else {

        let list = `Naves registradas: \n`
        spaceships.forEach(( spaceship:{ name:string, pilot:string, crewLimit:number, crew:string[], inMission:boolean } ) => {
            list += 
            `   Nave: ${spaceship.name}\n` +
            `   Piloto: ${spaceship.pilot}\n`+
            `   Limite de tripulantes: ${spaceship.crewLimit}\n` +
            `   Tripulantes (${spaceship.crew.length}): \n`
        
            spaceship.crew.forEach(member => {
                list += `      - ${member} \n`
            })        
        })

        console.log(list)
    }
}

function menu() {
    let userOption = 0

    while( userOption != 5 ) {
        const menuOption = 
        'Painel principal\n\n' +
        '1. Registar nova nave\n' +
        '2. Adicionar novo tripulante\n' +
        '3. Enviar nave em missão\n' +
        '4. Listar naves registradas\n' +
        '5. Encerrar\n'

        console.clear()
        console.log(menuOption)
        userOption = parseInt(prompt('Opção: '))

        switch (userOption) {
            case 1:
                console.clear()
                registerSpaceship()
                break
            case 2:
                console.clear()
                addMemberToSpaceship()
                break
            case 3:
                console.clear()
                const spaceshipName = prompt('Informe qual nave você gostaria de enviar em uma missão: ')
                const spaceship = findSpaceship(spaceshipName)
                sendInMission( spaceship )
                break
            case 4:
                console.clear()
                listSpaceship()
                prompt('Voltar ao menu [enter] ')
                break
            case 5:
                console.clear()
                console.log('Programa encerrado!')
                break
        }
    }
    
}

menu()
