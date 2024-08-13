/*
    Turbo -> Decorator:
        Um decorator é basicamente um função que subtitui outra função/método de uma classe,
        ou serve como forma de implementação na mesma

*/
function Log() {
    return function( target:any, key:string, descriptor:PropertyDescriptor ) {
        const originalMethod = descriptor.value

        descriptor.value = function( ...args:any[] ) {
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-')
            console.log(`Chamando o método: [${key}] com os parâmetros ${JSON.stringify(args)}`)
            const result = originalMethod.apply( this, args )
            
            console.log(`O método [${key}] retornou o valor: ${JSON.stringify(result)}`)
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-')

            return result
        }
    }
}

function Turbo() {
    return function ( target:any, key:string, descriptor:PropertyDescriptor ) {
        descriptor.value = function (speedValue:number) {
            this.speed = speedValue + 50
            console.log(`Turbo mode! Now you are at ${this.speed}km/h`)
        }
    }
}

interface Ship {
    name:  string
    pilot: string
    attackPoints?: number
}

class Spaceship implements Ship  {
    name: string
    pilot: string
    speed: number

    constructor(name:string, pilot:string) {
        this.name  = name
        this.pilot = pilot
    }

    @Log()
    @Turbo()
    acellerate(speedValue:number) {
        this.speed = speedValue
        console.log(`Now you are at ${this.speed}km/h`)
    }

    @Log()
    breakShip() {
        this.speed = 0
        console.log('Your spaceship are stoped!')
    }
}

console.clear()
const xWing = new Spaceship( 'X-Wing', 'Luke Skywalker' )
xWing.acellerate(20)
xWing.breakShip()