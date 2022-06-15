function SalvarAnotacao(){
    novoContato = document.getElementById("nome").value
    novoTel = document.getElementById("tel").value
    document.getElementById("contatos-salvos").innerHTML += "<p>" +
    "<h5>Nome: </5>" + novoContato + "<h5>Telefone: </h5>" + novoTel + "</p>"
    document.getElementById("nome").value = " " 
    document.getElementById("tel").value = " " 
    alert("Contato salvo \ncom sucesso")

}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    navigator.vibrate(7000);
})