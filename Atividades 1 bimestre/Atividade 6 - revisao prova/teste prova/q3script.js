let envia = document.getElementById('envia');

envia.onclick = function(){
    let nome = document.getElementById('nome');
    let cont = document.getElementById('contato');
    let email = document.getElementById('email');

    if(nome.value == "" || cont.value == "" || email == ""){
        alert("Preencha todos os campos");
    }
    else{
        if(confirm("Enviar dados?")){
            alert("Dados enviados");
        }
        else{
            alert("Envio cancelado");
        }
    }
}