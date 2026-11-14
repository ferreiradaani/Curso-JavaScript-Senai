// exemplo sorteio
let alunos = [
    'Adriano',
    'Dani',
    'Fabio',
    'Bernardo',
    'Alexandre',
    'João Arthur',
    'João Pedro',
    'Dudu',
    'Nadine'
]

// criando UM numero aleatorio

let aleatorio = Math.floor(Math.random() * alunos.length)

// mostrando a pessoa aleatoria
console.log(alunos[aleatorio])
