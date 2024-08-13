class Spaceship {
    
    private _name:string
    protected captain:string
    protected speed:number

    constructor(name:string, captain:string) {
      this._name = name
      this.captain = captain
      this.speed = 0
    }
  
    public accelerate(rate:number, time:number) {
      this.speed = rate * time
    }

    get name() {
        return this._name
    }

    set name(name:string) {
        this._name = name
    }
}

class Fighter extends Spaceship {
    public weapons:number

    constructor(name:string, captain:string, weapons:number) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
      this.name = ''
      this.captain = ''
    }
  }
  
let ship = new Fighter('USS Enterprise', 'James T. Kirk', 12)
  
ship.accelerate(50, 10)
ship.weapons = 5