// 59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens

const prompt = require('prompt-sync')()

let maiorIdade = 0
let qtdHomens = 0
let mulherJovem = 0
let mediaHomens = 0
let soma = 0
let continuar = true // Ja começamos o while com true. 

//loop
while (continuar) {
    let idade = Number(prompt("Idade: "))
    let sexo = prompt("Seu Sexo F/M: ").toLowerCase()

    //verificação dos homens

    if (sexo === "m") {
        qtdHomens++
        soma += idade
    } else {
        if (sexo === "f")
            if (mulherJovem === 0 || idade < mulherJovem)
                mulherJovem = idade
    }

    // maior idade 
    if (idade > maiorIdade) {
        maiorIdade = idade
    }

    let resposta = prompt("Você deseja continuar? s/n ").toLowerCase()
    if (resposta === 'n') {
        continuar = false
    }

    console.log("======================================")
}

mediaHomens = soma / qtdHomens
console.log("A maior idade: " + maiorIdade)
console.log("A mulher mais jovem tem: " + mulherJovem)
console.log("A media de idade dos homens é: " + mediaHomens)
console.log("Tem " + qtdHomens + "homens")