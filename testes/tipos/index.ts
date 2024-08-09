// criar uma classe user que implementa a interface Person

interface Person {
    name: string,
    phoneNumber: number,
    cpf: number
}

function formatter(data:string) {
    let dataFormat:number
    try   {
        const number = data.match(/\D+/g)
        number?.forEach( simbol => {
            data = data.replace(simbol, '')
        })

        dataFormat = parseInt(data)
    }
    catch {
        dataFormat = parseInt(data)
    }

    return dataFormat
}

class Person implements Person {
    #name: string
    #phoneNumber: number
    #cpf: number

    constructor( name:string, phoneNumber:string, cpf:string ) {
        this.#name = name
        this.#phoneNumber = formatter(phoneNumber)
        this.#cpf = formatter(cpf)
    }
}

console.clear()
const lukas = new Person( 'Lukas', '(19) 97104-4160', '565.192.758-16' )

console.log( lukas.phoneNumber )