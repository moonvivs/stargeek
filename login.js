const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha= document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elemento) => {
        if (elemento.email == email.value && elemento.senha == senha.value) {
            evento.preventDefault();
            mensagem.innerHTML = "Usuário Logado"
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    email : email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados));
            return true;
        }else {
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail Incorreto"
        }
    });
    setTimeout(()=>{
        window.location.assign("filmes.html");
    }, 3000);

}
