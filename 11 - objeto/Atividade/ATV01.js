// cadastre 3 produtos: nome, preco, descricao
// somar os valores dos produtos 

const prompt = require("prompt-sync") ()

let produtos = []

for(let i = 1, i <= 3; i++) {
    let nome = prompt("Nome do produto: ")
    let preco = prompt("Qual preco do produto: ")
    let descricao = prompt("Qual descrição do produto: ")

    let produto = {
        nome: nome,
        preco: preco,
        descricao: descricao
    }

    produtos.push(produto)
    console.log("---------------------------")
}
for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i])
 
}