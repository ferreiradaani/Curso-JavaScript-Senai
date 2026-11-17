// Cadastro de aluno
// 1º Perguntar quantos alunos deve cadastrar
// 2º Cadastrar o aluno
// 3º MOstrar todos cadastrados
// 4º Sortear um aluno
// >> console.log("Da lista, o aluno sorteado foi: " aluno)

const prompt = require("prompt-sync")()

// 1º Perguntar quantos alunos deve cadastrar
let usuario = []
let qtdalunos = prompt("Quantos alunos deve cadastrar: ")

// 2º Cadastrar o aluno
for (let i = 1; i <= qtdalunos; i++){
    let alunos = prompt("Nome do aluno: ")
    usuario.push(alunos)    
}
// 3º mostre todos cadastrados
console.log(usuario)

// 4º Sortear um aluno
let aleatorio = Math.floor(Math.random() * usuario.length)
console.log("Da lista. o aluno sorteado foi:" + usuario[aleatorio])

  