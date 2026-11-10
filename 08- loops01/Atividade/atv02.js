// Dica: Usar IF/Else -- VAR++ (Var = var + 1)
// Dica 2: Usar 3 IF

//Ex 52. Crie um algoritmo que leia a idade de 5 pessoas, mostrando no final
//a) qual a media de idade
//b) quantas pessoas tem mais ou igual de 18 anos
//c) quantas pessoas tem menos de cinco anos
//d) qual a maior idade

const prompt = require("prompt-sync")()

let id = 7
let media = 0
let somaidade = 0
let maior18 = 0
let menor5 = 0
let maiorIdade = 0

for (let i = 1; i <= id; i++){
//Perguntar a idade
let idade = Number(prompt("Informe a idade: "))
//calcular a media das idades
somaidade = idade
media = somaidade / id
//quantas pessoas tem mais ou igual de 18 anos
if (idade >= 18){
    maior18++
}
// quantas pessoas tem menos de cinco anos   
if (idade < 5){
    menor5++
}
//qual a maior idade 
if ( idade > maiorIdade) {
    maiorIdade = idade
} 
}


console.log(media)
console.log(maior18)
console.log(menor5)
console.log(maiorIdade)




