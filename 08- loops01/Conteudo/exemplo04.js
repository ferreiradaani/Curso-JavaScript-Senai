// sempre que quiser fazer pergunta para usuario tem que colocar (const prompt = require("prompt-sync") ())

// const prompt = require("prompt-sync") ()

// let quantidadeNotas = Number(prompt("Quantas notas serão digitadas: "))
// let soma = 0

// for( let i = 1; i <= quantidadeNotas; i++){
//     let nota = Number(prompt("Digite a nota: "))
//     soma += nota

// }

// let media = soma / quantidadeNotas
// console.log(`A media foi de ${media.tofixed(2)}`)

const prompt = require("prompt-sync") ()

let quantidadeNotas = Number(prompt("Quantas notas serão digitadas: "))
let soma = 0

for(let i = 1; i <= quantidadeNotas; i++) {
    let nota = Number(prompt("Digite a nota: "))
    soma += nota
}

let media = soma / quantidadeNotas
console.log(`A media foi de ${media.toFixed(2)}`)