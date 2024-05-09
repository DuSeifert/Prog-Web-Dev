function somSub(valor){
    let tela = document.getElementById('tela').value += valor;
}

function limpaTela(){
    document.getElementById('tela').value = "";
}

function calcula(){
    try{
        let res = eval(document.getElementById('tela').value);
        document.getElementById('tela').value = res;
    }
    catch(error){
        document.getElementById('tela').value = "Erro";
    }
}