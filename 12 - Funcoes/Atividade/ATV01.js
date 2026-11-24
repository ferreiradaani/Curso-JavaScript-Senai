// Perguntar se quer (+, -, / ou *)
// para cada operacao uma funcao
// cada funcao com dois parametros
// depois da escolha do usuarios perguntar dois valores
// valores que o usuarios perguntou passar como argumento

const prompt = require("prompt-sync")()


// criando as funcoes
function soma(a,b) {
    return a + b
}

function sub(a,b) {
    return a - b
}

function multi(a,b) {
    return a * b
}

function div(a,b) {
    return a / b
}


// perguntando ao usuario dois valores
let valor1 = Number(prompt("Primeiro valor: "))
let valor2 = Number(prompt("Segundo valor: "))

console.log("=== OPCOES ===")

console.log('1 - +')
console.log('2 - -')
console.log('3 - *')
console.log('4 - /')

let opcao = Number(prompt("Digite uma opção acima: "))

// condição

switch (opcao) {
    case 1:
        let somar = soma(valor1, valor2)
        console.log("A soma dos valores é: " + somar)
        break;
    case 2:
        let subtrair = sub(valor1, valor2)
        console.log("A subtracao dos valores é: " + subtrair)
        break;
    case 3:
        let multiplicar = multi(valor1, valor2)
        console.log("A multiplicacao dos valores é: " + multiplicar)
        break;
    case 4:
        let dividir = div(valor1, valor2)
        console.log("A divisao dos valores é: " + dividir)
        break;
    default:
        console.log("opcao invalida.")
        break;

}


