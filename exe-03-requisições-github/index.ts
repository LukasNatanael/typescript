import * as promptSync from 'prompt-sync'
const prompt = promptSync()

interface User {
    id:           number
    login:        string
    name:         string
    bio:          string
    public_repos: number
    repos_url:    string
}

let usersList:[] = []
let user:User

async function fetchUser(username:string) {

    const response = await fetch(`https://api.github.com/users/${username}`)
    .then( response => response.json() )
    .catch( error => console.log(`Usuário não encontrado! ${error}`) )

    if (response.message === 'Not Found') {
        console.log(`Usuário não encontrado!`)
        return
    }

    user = {
        id: response.id,
        login: response.login,
        name: response.name,
        bio: response.bio,
        public_repos: response.public_repos,
        repos_url: response.repos_url,
    }
    return user
}

function getUser(username:string) {
    // const user = prompt('Informe um username a ser localizado: ')
    const user = fetchUser(username)
    usersList.push(user)
}
console.clear()
getUser('LukasNatanael')
console.log(usersList)