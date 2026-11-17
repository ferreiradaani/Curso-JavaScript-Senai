// 01 - cadastre 10 idades
// 02 - pegue a maior idade 
// 03 - pegue a menor idade
// 04 - media das idades

const prompt = require("prompt-sync")()

let idade = []
let soma = 0
let maioridade = 0
let media;


// 01 - cadastre 10 idades

for (let i = 1; i <= 10; i++){
    let cadastroidade = Number(prompt("Informe as idades: "))
    idade.push(cadastroidade)
}
let menoridade = idade[0]

for(let i = 0; i < idade.length; i++){

// 02 - pegue a maior idade
        if (idade[i] > maioridade){
            maioridade = idade[i]
           
        }
// 03 - pegue a menor idade
        if (idade[0] < menoridade){
            menoridade = idade[0]

    }
}
// 04 - media das idades

soma += idade[i]
media = soma/idade.length

console.log(maioridade)
console.log(menoridade)
console.log(media)




