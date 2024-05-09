let op = document.getElementById('opcao');
let a = document.getElementById('lado');
let mostra = document.getElementById('mostra');
let botao = document.getElementById('calc');

botao.onclick = function(){    
    mostra.value = "";
    
    if(op.value == "area"){
        mostra.textContent = "Área = "+(a.value*a.value)+" m²";
    }
    else{
        mostra.textContent = "Perímetro = "+(a.value*4)+" m²";
    }
}
    