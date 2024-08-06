import * as promptSync from 'prompt-sync'

interface User {
    id:           number
    login:        string
    name:         string
    bio:          string
    public_repos: number
    repos_url:    string
}

let usersList = []

async function getUser(username:string) {
    let user:User

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
    // not working
    usersList.push(user)
    console.log(user)
}

getUser( 'LukasNatanael' )
// console.log(usersList)