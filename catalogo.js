const nome = document.getElementById("nome");
const resumo = document.getElementById("resumo");
const btne = document.getElementById("btne");
const botaomodal = document.getElementById("btn");
const cards = document.querySelector(".cards");
const ef = document.getElementById("ef");
const botaoentrar = document.querySelector(".botaoentrar");
const botaoeditar = document.querySelector(".btneditar");
const botaofechar = document.querySelector(".btnclose");
const idelemento = document.getElementById("idalterar");

btne.onclick= (evento)=> {
    evento.preventDefault();
    fenvio()
    .then(result =>{
                     if(result){
                        let dados = JSON.parse(localStorage.getItem("catalogo"))||[];
                        dados.push(
                                      {
                                         nome: nome.value,
                                        resumo: resumo.value,
                                        foto: nomeArq
                                        }
                                     )
                        localStorage.setItem("catalogo", JSON.stringify(dados));
                        
                     }else{
                        alert("Houve erro no envio do arquivo");
                     }

                    });
}


var nomeArq;
async function fenvio() { 
    const url = 'http://localhost:3005/upload';
    const arquivo = document.getElementById("ef").files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    console.log(JSON.stringify(formData));
    try{
         
         var resp = await fetch(url, {
                                       method: 'POST',
                                       body: formData,
                                     }
                               ) 
         if (resp.ok){
           let respText = await resp.text();
           nomeArq = respText;
           return true;
         }
         else{
              return false;
         }
       }
    catch (error) {
        console.error(error);
        return false;
      }
}

function editar(indice){
   nome.value = "";
   resumo.value = "";
   ef.files[0] = null;
   cadmodal.style.display = "flex";
   botaocadastrar.style.display = "none";
   botaoeditar.style.display = "block";
   
   let dados = JSON.parse(localStorage.getItem("catalogo"));
   nome.value = dados[indice].nome;
   resumo.value = dados[indice].resumo;
   //foto.files[0] = dados[indice].foto;
   idelemento.value = indice;
   fotoa = dados[indice].ef;
}
var fotoa;
botaoeditar.onclick = (evento) =>{
   if ((fotoa != ef.value)&&(ef.value != "")){
   evento.preventDefault();
   fenvio()
   .then(result =>{
                    if(result){
                       salvaEdicao(nomeArq);
                       }
                   });
   }
   else
   {
       salvaEdicao(fotoa);
   } 
}
function salvaEdicao(pfoto){
   let dados = JSON.parse(localStorage.getItem("catalogo"));
   dados[idelemento.value].nome = nome.value;
   dados[idelemento.value].descricao = resumo.value;
   dados[idelemento.value].ef = pfoto;
   localStorage.setItem("catalogo", JSON.stringify(dados));

}