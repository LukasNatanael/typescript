import * as promptSync from 'prompt-sync'

console.clear()
const input = promptSync()

const name  = input('Please inform your name: ')
const age   = input('Please inform your age: ')
const email = input('Please inform your email: ')

const data = { name, age, email }

console.clear()
console.table( data )