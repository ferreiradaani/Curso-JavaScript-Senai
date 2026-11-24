// 96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de um aluno e retornar a sua média para o programa principal.
// Usar for


const prompt = require("prompt-sync")()

let nota1 = Number(prompt("Primeira nota: "))
let nota2 = Number(prompt("Segunda nota: "))

// criando a função

function media(a,b){
    return ((a+b)/2)

}

// condicao 

  let med = media(nota1,nota2) 
console.log("A media é: "+ med)
