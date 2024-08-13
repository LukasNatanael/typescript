interface Ship {
    name:  string
    pilot: string
}

interface Fighter extends Ship {
    weaponsPoints: number
    shieldPoints:  number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed:        number
    acceleration: number
}

function cloneShip<ShipType extends Ship >( ship:ShipType, newName:string, newPilot:string ) {
    const newShip = ship
    newShip.name  = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon:Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const xWing:Fighter = {
    name:  'X-Wing',
    pilot: 'Han Solo',
    weaponsPoints: 100,
    shieldPoints:  100
}

const copy1 = cloneShip( falcon, 'Milano',    'Peter' )
const copy2 = cloneShip( xWing,  'Black One', 'Poe' )

interface EnemyShip extends Ship{
    flag?: string
}

const enemyCopy  = cloneShip( falcon, 'Enemy', 'Enemy' )
// aqui eu deixo explicito que irei clonar uma nave inimiga logo, posso adicionar uma bandeira a nave
const enemyCopy2 = cloneShip<EnemyShip>( falcon, 'Enemy', 'Enemy' )

// não me permite adicionar uma bandeira pois, ela foi clonada do tipo Ship
enemyCopy.flag = 'Imperial' // irá gerar erro

// me permite adicionar uma bandeira pois, ela foi clonada explicitamente do tipo EnemyShip
enemyCopy2.flag = 'Imperial'

// Posso implementar em classes da mesma maneira

class Pilot<ShipType> {
    name: string
    ship: ShipType

    constructor( name:string, ship:ShipType ) {
        this.name = name
        this.ship = ship
    }
}

// me permite explicitar o tipo, embora não seja necessário
const han = new Pilot( 'Han', falcon )
const luke = new Pilot<Fighter>( 'Luke Skywalker', xWing )