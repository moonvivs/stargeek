const btn = document.getElementById("btn");
const botaomodal = document.getElementById("btn");
const cards = document.querySelector(".cards");
const nome = document.getElementById("nome");
const resumo = document.getElementById("resumo");
const ef = document.getElementById("ef");


function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.innerHTML = `<div class="cardimagem"> <img src="imagens/${elemento.foto}"> </div> <div class="cardnome">${elemento.nome} <p>${elemento.descricao}</p></div> <div class="cardinfo">
        <div class="editar"><i class="bi bi-pencil-fill" onclick="editar(${indice})"></i></div>
        <div class="excluir"><i class="bi bi-trash3-fill" onclick="excluir</i></div>
        </div>`;

        cards.appendChild(divcard);
        
    });
}

carregarCatalogo();

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

btn.onclick= () => {
    window.location.assign("catalogo.html")
}
