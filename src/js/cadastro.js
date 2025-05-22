var formProduto = document.getElementById("form-produto");

console.log("1.formProduto" , formProduto)
// var botaoEntrar  = document.getElementById("submit")


function cadastrarProduto(event) {
   
    event.preventDefault(); // Previne o comportamento padrão do formulário

    var produto = document.getElementById("nome-produto").value;

    var quantidade = document.getElementById("quantidade-produto").value;

    console.log(produto)
    console.log(quantidade)


    console.log("Função cadastrarProduto chamada")

}

formProduto.addEventListener("submit", cadastrarProduto);