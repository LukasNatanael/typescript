interface GithubUserResponse {
    id:           number
    login:        string
    name:         string
    bio:          string
    public_repos: number
    repos_url:    string
}

interface GithubRepositoriesResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

const users:GithubUserResponse[] = []

async function fetchUser(username:string) {
    const response  = await fetch(`https://api.github.com/users/${username}`)
    const user:GithubUserResponse = await response.json()

    if (user.message) {
        console.log(`Usuário não encontrado!`)
    }
    else {
        users.push(user)
        console.log(
            `O usuário ${user.login} foi salvo.\n`,
            `\nId: ${user.id}`      +
            `\nLogin: ${user.login}` +
            `\nNome: ${user.name}`  +
            `\nBio ${user.bio}`     +
            `\nRepositórios públicos: ${user.public_repos}\n`
        )
        // showAllUser()
        // showRepositoresTotal()
        showTopFive()

    }
}

async function showUser(username:string) {
    const user = users.find( user => user.login === username  )

    if (typeof user === 'undefined') {
        console.log(`Usuário ${username} não encontrado!`)
    }
    else {
        const response = await fetch(user.repos_url)
        const respositories: GithubRepositoriesResponse[] = await response.json()
        
        let message = 
        `\nId: ${user.id}`      +
        `\nLogin: ${user.login}` +
        `\nNome: ${user.name}`  +
        `\nBio ${user.bio}`     +
        `\nRepositórios públicos: ${user.public_repos}\n`

        respositories.forEach( repository => {
            message +=
            `\nNome: ${repository.name}` +
            `\nDescrição: ${repository.description}` +
            `\nEstrelas: ${repository.stargazers_count}` +
            `\nÉ um fork: ${repository.fork ? 'Sim' : 'Não'}\n`
        })
        console.log(message)
    }
}

function showAllUsers() {
    let message = '\nUsuários:\n'
    
    users.forEach( user => message += `    - ${user.login}\n` )
    console.log(message)
}

function showRepositoresTotal() {
    const totalRepositories = users.reduce( (accumulator, user) => accumulator + user.public_repos, 0 )
    console.log(`O grupo possui um total de ${totalRepositories} repositórios públicos!\n`)
}

function showTopFive() {
    const topFive = users.slice().sort( (currentUser, nextUser) => nextUser.public_repos - currentUser.public_repos ).slice(0, 5)
    let message = 'Top 5 usuários com mais repositórios:\n'
    topFive.forEach( (user, index) => message += `  ${index + 1} - ${user.login}: ${user.public_repos} repositórios.\n` )
    
    console.log(message)
}

async function main() {
    console.clear()
    
    await fetchUser('LukasNatanael')
    await fetchUser('isaacpontes')
    await fetchUser('julianaconde')
    await fetchUser('pcaldas')
    await fetchUser('lucasqueirogaa')

    await showUser('LukasNatanael')
    await showUser('isaacpontes')

    showAllUsers()
    showRepositoresTotal()
    showTopFive()
}

main()