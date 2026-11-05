let km = Number(prompt("Informe a quantidade de Km percorridos:"))
let dias = Number(prompt("Informe a quantidade de dias alugado:"))

let precototal = ((dias * 90) + (km * 0.20))

console.log("O total a pagar é: " + precototal.toFixed(2))