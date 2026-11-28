const produtos = [
    {
        nome:"Notebook Dell Inspiron",
        categoria: "Eletronicos",
        preco: 3500,
        descricao: "Um notebook bom e barato. "
    },
    {
        nome: "Mouse Logitech",
        categoria: "Periféricos",
        preco: 120,
        descricao: "Um mouse de alta qualidade"
    },
    {
        nome: "Teclado Mecanico",
        categoria: "Perifericos",
        preco: 350,
        descricao: "Teclado gamer mecânico."
    },
]

const lista = document.querySelector("#lista-produtos")
const form = document.querySelector("form")

// criando uma função
function mostrarProdutos(produtos) {
    lista.innerHTML = ""
    for (let i = 0; i < produtos.length; i++) {
       lista.innerHTML += `
            <li class="card-produto">
                <div class="informacoes">
                    <span class="categoria"> ${produtos[i].categoria} </span>
                    <h2>${produtos[i].nome}</h2>
                    <p>${produtos[i].descricao}</p>
                    <strong> R$ ${produtos[i].preco}</strong>
                </div>
            </li>
       
       ` 
    }
}

// chamar o form (Adicionar evento de clique, submit = enviar)

form.addEventListener("submit", function(evento){
    evento.preventDefault()

    const nome = document.querySelector("#nomeProduto").value
    const categoria = document.querySelector("#categoria").value
    const descricao = document.querySelector("#descricao").value
    const preco = document.querySelector("#preco").value

    let produto = {
        nome,
        categoria,
        descricao,
        preco
    }

    produtos.push(produto)

    mostrarProdutos(produtos)
})

// chamo a funcao para mostrar os produtos
mostrarProdutos(produtos) 