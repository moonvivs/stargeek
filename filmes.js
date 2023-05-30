const btn = document.getElementById("btn");
const cards = document.querySelector(".linhas");
const nome = document.getElementById("nome");
const resumo = document.getElementById("resumo");
const ef = document.getElementById("ef");

var emaillogado;
femaillogado();

carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.innerHTML = `<div>
        <img src="imagens/${elemento.foto}" alt="">
        <div class="info">
        <i  onclick="editar(${indice})">Editar</i>
        <i  onclick="excluir(${indice})">Excluir</i>
        </div>
    </div>`;

        cards.appendChild(divcard);}
        
    });
}

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

function editar(indice){
    var url ="catalogo.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

btn.onclick= () => {
    window.location.assign("catalogo.html");
}

function femaillogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
      if (dados == null){
        window.location.assign("login.html");
      }else {
        emaillogado = dados[0].email;
      }
  }