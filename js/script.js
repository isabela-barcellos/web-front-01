const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//criando um elemento
const pMensagem = document.createElement("p");

function clearForm(){
    inputNota.Value = "";
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputNotaValue = inputNota.Value;
    

    if (inputNota.value.trim() === '') {
        // trim não validar espaço
        pMensagem.textContent = "Campo obrigatório"
        inputNota.insertAdjacentElement("afterend",pMensagem)
        pMensagem.setAttribute("class","error");
        // textContent coloca um texto no html
        return false;
    }

    if(inputNota.value >= 6){
        alert("Voceê está aprovado");
    } else{
        alert("Você foi reprovado");
    }

    pMensagem.classList.add("d-none")



});
// Se der erro ir no console do navegador e procurar o erro 

// colocar mensagem no lugar dos alertas 