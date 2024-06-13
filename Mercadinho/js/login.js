function verificar(){
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');
    
    if(usuario.value.trim() === "" || senha.value.trim() === ""){
        alert('Preencha todos os dados');
        return;
    }
    else if(usuario.value.trim() === "edu" && senha.value.trim() === "123"){
        alert('Bem vindo administrador!');
        usuario.value = '';
        senha.value = '';
        window.location.href = "../html/adm.html";
        }
        else{
            alert("Credenciais inválidas");
            usuario.value = '';
            senha.value = '';
            return;
        }
}