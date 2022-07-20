function SalvarAnotacao(){
    novoContato = document.getElementById("nome").value
    novoTel = document.getElementById("tel").value
    document.getElementById("contatosSalvos").innerHTML += "<p>" +
    "Nome: " + novoContato + " " + "Telefone: " + novoTel + "</p>"
    document.getElementById("nome").value = " " 
    document.getElementById("tel").value = " " 
  
    localStorage.contatosSalvos = document.getElementById("contatosSalvos").innerHTML
}
function carregar(){
    if(localStorage.contatosSalvos){
        document.getElementById("contatosSalvos").innerHTML = 
        localStorage.contatosSalvos
    }
}

window.addEventListener("load", function(){
    carregar()
})

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    navigator.vibrate(7000);
})