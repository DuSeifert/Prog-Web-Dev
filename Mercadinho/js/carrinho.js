atualizar();

function atualizar(){
    const stringJson = localStorage.getItem('carrinho');
    const vet = JSON.parse(stringJson);

    if(!vet){
        alert('carrinho vazio');
        window.location.href = "../html/menu.html";
    }
    
    carrinho();
    imprimir(vet);
}

function imprimir(vet){
    var lista = document.getElementById('lista');
    lista.innerHTML = '';

    for(let i=0 ; i<vet.length ; i++){
        let obj = vet[i];
        
        let p = document.createElement('div');
        p.innerHTML = `
            <p id="pnome" >${obj.item}</p>
            <p id="ppreco" >${obj.preco}</p>
            <p id="pdescr" >${obj.descr}</p>
            <p id="pacoes" >
                <button class="acaoBut" onclick = 'removerCarrinho(${i})'>- Carrinho</button>         
            </p>
        `        
        lista.appendChild(p);
    }
    console.log(vet);
    calcTotal(vet);
}

function removerCarrinho(indice){
    let obj = JSON.parse(localStorage.getItem('carrinho'));

    if(confirm(`Deseja excluir o item ${obj[indice].item}?`)){
        obj.splice(indice, 1);
        localStorage.removeItem('carrinho');

        const novaString = JSON.stringify(obj);
        localStorage.setItem('carrinho', novaString);
        atualizar();
    }
    else{
        return;
    }
}

function calcTotal(vet){
    var mostrar = document.getElementById('total');
    mostrar.innerHTML = '';
    let total = 0;

    for(let i=0 ; i<vet.length ; i++){
        total += Number(vet[i].preco);
    }

    let p = document.createElement('p');
    p.innerHTML = `
        Seu total é de R$${total.toFixed(2)}
    `
    mostrar.appendChild(p);
}

function confirmar(){
    let vet = JSON.parse(localStorage.getItem('carrinho'));
    if(vet.length === 0){
        alert(`O carrinho esta vazio`);
    }
    else{
        if(confirm(`Deseja finalizar a compra?`)){
            alert(`Obrigado pelo dinheiro troxa kk`);
            limparCarrinho(vet);
        }
        else{
            return;
        }
    }
}

function limparCarrinho(vet){
    vet.splice(0, vet.length);
    localStorage.removeItem('carrinho');

    console.log(vet);
    window.location.href = "../html/menu.html";
}

function carrinho(){
    var mostrar = document.getElementById('mostra');
    const vet = JSON.parse(localStorage.getItem('carrinho'));
    mostrar.innerHTML = '';

    if(vet){
        let p = document.createElement('p');
        p.innerHTML = '';    
        
        p.innerHTML = `
            ${vet.length}
        `;

        mostrar.appendChild(p);
    }
    return;
}