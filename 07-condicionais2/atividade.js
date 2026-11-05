//Crie variaveis com dois valores e crie uma variavel opcao
//e de acordo com a escolha
//SOME / MULTIPLIQUE / SUB / DIV
// OBS: Opção tem que receber string

let valor1 = 15
let valor2 = 25
let opcao = "Subtrair"

switch(opcao) {
    case "Soma":
        console.log(valor1 + valor2)
        break
    case "Multiplicar":
        console.log(valor1 * valor2)
        break
    case "Subtrair":
        console.log(valor1 - valor2)
        break
    case "Dividir":
        console.log(valor1 / valor2)
        break
    default:
        console.log("Opção invalida")
}