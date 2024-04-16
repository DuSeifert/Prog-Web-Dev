//vetor usado
const vet = [];

//variável para mudar dinamicamente o tamanho
//da caixa
var tam = document.querySelector(':root');

//pega o novo valor do item
let item = document.getElementById('nome');
let cont = 1;

//pilha: ----------------------------
function addPilha(){
    //add o item no vetor
    if(item.value == ''){       //se o campo estiver vazio, ele completa com um número
        item.value = cont++;
    }

    vet.push(item.value);
    item.value = '';

    //zera o campo de input
    document.getElementById('nome').value = '';

    //atualiza a impressão da pilha
    imprimir("1");
}
function remPilha(){
    if(vet.length > 0){
        vet.pop();
    }
    item.value = "";
    document.getElementById('nome').value = '';
    cont = 1;

    imprimir("1");
}

//fila: ------------------------------
function addFila(){
    if(item.value == ''){
        item.value = cont++;
    }
    vet.push(item.value);
    item.value = '';
    document.getElementById('nome').value = '';
        
    imprimir("2");
}
function remFila(){
    if(vet.length > 0){
        vet.shift();
    }
    item.value = "";
    document.getElementById('nome').value = '';
    cont = 1;

    imprimir("2");
}

//lista: ----------------------------
function addLista(){
    let pos = document.getElementById('pos');
    
    if(item.value == ''){
        item.value = cont++;
    }

    if(pos.value <= 0){
        vet.push(item.value);
    }
    else{
        vet.splice(pos.value-1, 0, item.value);
    }

    item.value = '';
    pos.value = '';
    document.getElementById('nome').value = '';
    document.getElementById('pos').value = '';

    imprimir("3");
}
function remLista(){
    let pos = document.getElementById('pos');
    if(vet.length > 0){
        if(pos.value > 0){
            vet.splice(pos.value-1, 1);
        }
        else{
            vet.shift();
        }
    }

    item.value = '';
    pos.value = '';
    document.getElementById('nome').value = '';
    document.getElementById('pos').value = '';
    cont = 1;

    imprimir("3");
}

//imprimir: -------------------------
function imprimir(tipo){
    //cria variável para alterar a div #mostra
    let imp = document.getElementById('mostra')

    //esvazia a impressão atual
    imp.innerHTML = '';

    if(vet.length > 0){
        switch(tipo){
            case "1":     //pilha
                for(let i = vet.length-1 ; i>=0 ; i--){
                    let p = document.createElement('p');
                    p.textContent = vet[i];
                    imp.appendChild(p);
                    let t = 450 + (40 * vet.length);            
                    tam.style.setProperty('--alt', t);
                }
                break;
            case "2":     //fila
                for(let i = 0 ; i<vet.length ; i++){
                    let p = document.createElement('p');
                    p.textContent = vet[i];
                    imp.appendChild(p);
                    let t = 450 + (40 * vet.length);            
                    tam.style.setProperty('--alt', t);
                }
                break;
            case "3":     //lista
                let j = 1;
                for(let i = 0 ; i<vet.length ; i++){ 
                    let p = document.createElement('p');
                    p.textContent = j+". "+vet[i];
                    j++;
                    imp.appendChild(p);
                    let t = 450 + (40 * vet.length);            
                    tam.style.setProperty('--alt', t);
                }
                break;
        }
    }
    //caso o vetor esteja vazio, ele imprime que está vazio
    else{
        let h2 = document.createElement('h2');
        h2.textContent = 'Vazio';
        imp.appendChild(h2);
    }
    console.log(vet);
}

//ola eu acabei de mudar isso:)