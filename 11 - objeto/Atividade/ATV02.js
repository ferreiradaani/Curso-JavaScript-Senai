let soma = 0

for (let i = 1; i <= 3; i++) {
     let nome = prompt("Nome do aluno: ")
     let nota = Number(prompt("Informe a nota: "))

     // criando um objeto
     let aluno = {nome,nota}

     // adcionando
     alunos.push(aluno)
    console.log("-----------------------------")
}

for ( let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
     // pegar a maior nota 
     if (alunos[i] > maiorNota){
        maiorNota = aluno[i]
      }

     // pegar a menor nota
     if (menorNota < alunos[i].nota){
        menorNota = aluno[i].nota)
      }  
     
      // Somar todas as notas
      soma += alunos[i].nota

      // reprovado
      if(alunos[i].nota < 6)

}
console.log(maiorNota)
console.log(menorNota)
