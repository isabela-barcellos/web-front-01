const buttonMedicamentos = document.querySelector("#medicamentos")
const remedios = document.querySelector(".remedios");
// #id 
// .class

//variavel validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEnviar = document.querySelector("button");

//criando um elemento p 
const pMensagem = document.createElement("p");

function clearForm(){
    campoNome.valeu = "";
    campoCidade.valeu = "";
}
//função da validação 
buttonEnviar.addEventListener("click",function(event){
    event.preventDefault();
    if(campoNome.value === '') {
        // alert("Preencha campo nome");
        pMensagem.textContent = "Prencha o campo nome";
        campoNome.insertAdjacentElement("afterend",pMensagem)
        pMensagem.setAttribute("class","erro");
        // alert("Preencha campo nome");
        return false;
    }
    if(campoCidade.value === '') {
        // alert("Preencha campo nome");
        pMensagem.textContent = "Prencha o campo cidade";
        campoCidade.insertAdjacentElement("afterend",pMensagem)
        pMensagem.setAttribute("class","erro");
        // alert("Preencha campo nome");
        return false;
    }
   
    pMensagem.classList.add("d'none");
    clearForm();

});


//camando medicamentos
buttonMedicamentos.addEventListener("click",function(){
    // adicionado
    remedios.classList.add("d-block");
})