// 01 - cadastre 10 idades
// 02 - pegue a maior idade 
// 03 - pegue a menor idade
// 04 - media das idades

const prompt = require("prompt-sync")()

let idades = []
let media;
let soma = 0
let maioridade = 0

for (let i = 1; i <= 10; i++){
    let idade= Number(prompt("Informe as idades: "))
    idades.push(idade)
}
let menoridade = idades[0]

for(let i = 0; i < idades.length; i++){
    soma += idades[i]
    if(idades[i]> maioridade){
        maioridade = idades[i]
    }
    if(menoridade> idades[i]){
        menoridade = idade[i]
    }
}
media = soma / idades.length

console.log( "A maior idade é:" + maioridade)
console.log( "A menor idade é:" + menoridade)
console.log( "A media das idades é:" + media)