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