function SalvarAnotacao(){
    novoContato = document.getElementById("nome").value
    novoTel = document.getElementById("tel").value
    document.getElementById("contatos-salvos").innerHTML += "<p>" +
    "Nome: " + novoContato + " " + "Telefone: " + novoTel + "</p>"
    document.getElementById("nome").value = " " 
    document.getElementById("tel").value = " " 
    alert("Contato salvo \ncom sucesso")

}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    navigator.vibrate(7000);
})