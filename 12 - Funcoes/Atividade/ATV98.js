// 98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois números como parâmetro e depois vai retornar a soma de todos os valores no intervalo entre os valores recebidos.
// Ex: SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
//     SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

const prompt = require("prompt-sync")()

// Solicindo os numeros

let numero1 = Number(prompt("Digite o primeiro número:  "))
let numero2 = Number(prompt("Digite o segundo número:  "))

// criando função

function SuperSomador(a, b) {

let soma = 0
    // condicao 
    for (let i = a; i <= b; i++) {
        soma = soma + i

    }
    
    return soma
}
console.log("A soma dos valores são: " + SuperSomador(numero1, numero2))

