// Cadastrar 7 alunos(Nome e Nota)

//Tirar a media das notas
//Maior nota
//Menor nota
//Quantidade de alunos reprovados (OBS: Nota < 6)

const prompt = require("prompt-sync") ()
let alunos = []

// Primeira parte, cadastrar alunos

for (let i = 1; i <= 4; i++){
    let nome = prompt("Nome do aluno: ")
    let nota = Number(prompt("Informe a nota: "))

    // criando um objeto
     let aluno = {nome,nota}

    // adcionando
     alunos.push(aluno)
    console.log("-----------------------------")
}

// Segunda parte, 

let menorNota = alunos[0].nota
let maiorNota = 0
let media;
let soma = 0
let reprovados = 0

for (let i = 0; i < alunos.length; i++){
    // Maior nota
    if(alunos[i].nota > maiorNota){
        maiorNota = alunos[i].nota
    }
    // soma todas as notas
    soma += alunos[i].nota

    // reprovado
    if(alunos[i].nota < 6){
        reprovados++
    }

    // Menor nota
    if(menorNota < alunos[i].nota) {
        menorNota = alunos[i].nota
    }
}
media = soma / alunos.length

console.log("Menor nota: "+menorNota)
console.log("Maior nota: "+maiorNota)
console.log("Soma das notas: "+soma)
console.log("Menor nota: "+media)



