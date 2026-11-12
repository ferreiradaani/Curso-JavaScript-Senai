//56) Crie um programa que leia vários números pelo teclado e mostre no final o somatório entre eles. Obs: O programa será interrompido quando o número 1111 for digitado
//Dica usar FLAG

const prompt = require('prompt-sync')()

let continuar = true
let soma = 0

while(continuar) {
    let numero = Number(prompt("Digite um número: "))

    if (numero === 1111 ){
        continuar = false
    } else {
        soma += numero
    }
}
console.log(`${soma}`)

