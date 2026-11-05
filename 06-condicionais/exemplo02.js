// CONDICAO COMPOSTA
let idade = 19
if(idade >=18){
    console.log("Pode dirigir")
}
else {
    console.log("Não pode dirigir")
}

console.log("==========================")

let clientevip = true
let valorcompra = 250

if(clientevip === true || valorcompra > 198){
    console.log("Voce possui desconto")
}else{
    console.log("Voce nao possui desconto")
}

console.log("==========================")

let compra = 180

if (compra >= 200){
    console.log("Frete gratis")
}else if (compra >= 100){
    console.log("Frete com desconto")
}else if (compra >= 50){
    console.log("Frete normal")
}else{
    console.log("O valor nao foi atingido")
}
console.log("==========================")

let nota1 = 9
let nota2 = 5
let nota3 = 4

let media = (nota1 + nota2 + nota3) / 3

if(media >= 6) {
    console.log("Sua media foi de " + media + " - Aprovado")
}else if (media >=5 && media <= 5.9){
    console.log("Sua media foi de " + media + " - Recuperacao")
}else{
    console.log("Sua media foi de " + media + " - Reprovado")
}

