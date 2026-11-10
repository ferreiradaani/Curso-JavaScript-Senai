// 1 - Pergunte quantas viagens serao registradas
// 2 - Utilize for para repetir a solicitadao dos dados
// 3 - em cada viagem, solicite a quantidade de km percorridos
// 4 - solicite a quantidade de listro de combustivel consumidos
// 5 - calcule o consumo de cada viagem (km dividos pelos litros)
// 6 - Acumule os consumos para calcular a media
// 7 - apresente o consumo medio final

// exemplo
// Quantas viagens deseja registrar? 3

// Quilometros percorridos na vigem: 100
// Litros consumidos na viagem: 10
// console.log(===============)

// const prompt = require("prompt-sync")()

// let quantidadeViagem = Number(prompt("Quantas viagens serão registradas: "))
// let soma = 0

// for (let i = 1; i <= quantidadeViagem; i++) {

//     console.log("Viagem " + i)

//     let km = Number(prompt("Digite os quilômetros percorridos: "))
//     let litros = Number(prompt("Digite os litros consumidos: "))

//     let consumo = km / litros

//     console.log("Consumo da viagem: " + consumo.toFixed(2) + " km/l")

//     soma = soma + consumo

//     console.log("-------------------")
// }

// let media = soma / quantidadeViagem

// console.log("Consumo médio final: " + media.toFixed(2) + " km/l")

const prompt = require("prompt-sync")()

let quantidadeViagem = Number(prompt("Quantas viagens serão registradas: "))
let somaTotal = 0

for (let i = 1; i <= quantidadeViagem; i++) {
    // perguntar km percorridos
    let kmpercorridos = Number(prompt("Km percorridos: "))
    // perguntar litros consumidos
    let litrosconsumidos = Number(prompt("litros consumidos na viagem: "))
    // calculo
    let calculo = kmpercorridos / litrosconsumidos
    //somar consumo final

    somaTotal += calculo
}

let consumoMedio = somaTotal / quantidadeViagem
console.log(`Consumo medio foi de ${consumoMedio.toFixed(2)} km/L`)