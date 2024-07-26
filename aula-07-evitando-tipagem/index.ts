// ? => serve para informar que o parâmetro é opcional
function sendSpaceship( spaceship: {pilot: string, copilot?: string} ) {
    console.log('Sending spaceship...')
}

sendSpaceship( { pilot: 'Ryan', copilot: 'Natanael' } )
sendSpaceship( { pilot: 'Lukas'} )

// unknown => serve para indicar que o tipo de dados que será recebido é desconhecido logo, qualquer valor pode ser atribuido a ele 
let input: unknown

input = 'Lukas'
input = true
input = 20
input = []

let strValue: string
strValue = 'teste'
input = strValue

// any => recebe qualquer tipo de valor
let data: any

data = strValue
data = input

// never => indica que seu código caiu em um estado que não devia ocorrer
function verification( argument ) {
    if ( argument ) {
        console.log('Everything okay')
    }
    else {
        let _check: never
    }
}