import * as promptSync from 'prompt-sync'

type CategoriesMovies = 'Ação'  | 'Aventura' | 'Comédia' | 'Drama' | 'Terror' | 'Fantasia'
type CategoriesAge    = 'Livre' |    '12'    |   '14'    |   '16'  | '+18'
type ConfirmOptions   = 's'     |    'n'     |   'sim'   |  'não'
type VisualizerOption = 'Visto' | 'A ver'

const prompt = promptSync()

function confirmation() {
    let validOption = false
    
    let userOption:ConfirmOptions
    while (!validOption) {
        userOption = prompt('[s] sim [n] não: ')

        switch( userOption[0].toLowerCase() ) {
            case 's':
                userOption = 's'
                validOption = true
                break
            case 'sim':
                userOption = 'sim'
                validOption = true
                break
            case 'n':
                userOption = 'n'
                validOption = true
                break
            case 'não':
                userOption = 'não'
                validOption = true
                break
            default:
                console.log('Opção inválida! Por favor informe uma opção válida.')
                break

        }
    }
    return userOption
}

function validMovieCategory() {
    let validCategory = false
    
    const menuOption =
    'Categorias de filme \n\n' +
    '1. Ação\n' +
    '2. Aventura\n' +
    '3. Comédia\n' +
    '4. Drama\n' +
    '5. Terror\n' +
    '6. Fantasia\n' +
    '7. Nova categoria\n'

    let userOption:number
    let category:CategoriesMovies
    while (!validCategory) {
        console.clear()
        console.log(menuOption)
        userOption = Number(prompt('Informe a categoria do filme: '))

        switch(userOption) {
            case 1:
                category = 'Ação'
                validCategory = true
                break
            case 2:
                category = 'Aventura'
                validCategory = true
                break
            case 3:
                category = 'Comédia'
                validCategory = true
                break
            case 4:
                category = 'Drama'
                validCategory = true
                break
            case 5:
                category = 'Terror'
                validCategory = true
                break
            case 6:
                category = 'Fantasia'
                validCategory = true
                break
            case 7:
                console.log('Registrar nova categoria. Implementar!')
                break
            default:
                console.log('Opção inválida! Por favor informe uma opção válida!')
                break
        }
    }

    return category
}

function registerMovie() {
    const name = prompt('Informe o nome do filme: ')
}

validMovieCategory()