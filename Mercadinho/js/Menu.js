atualizar();

function atualizar(){
    const stringJson = localStorage.getItem("catalogo");
    const vet = JSON.parse(stringJson);

    carrinho();
    imprimir(vet);
}

function imprimir(vet){
    var lista = document.getElementById('lista');
    lista.innerHTML = "";

    if(vet){
        for(let i=0 ; i<vet.length ; i++){
            let obj = vet[i];
    
            let p = document.createElement('div');
            p.innerHTML = `
                <p id="pnome" >${obj.item}</p>
                <p id="ppreco" >${obj.preco}</p>
                <p id="pdescr" >${obj.descr}</p>
                <p id="pacoes" >
                    <button class="acaoBut" onclick = 'addCarrinho(${i})'>+ Carrinho</button>         
                </p>
            `;        
            lista.appendChild(p);
        };
        console.log(vet);
    }
    else{
        let p = document.createElement('p');
            p.innerHTML = `
                Catálogo vazio :(
            `
            lista.appendChild(p);
    }
}

function addCarrinho(indice){
    const stringJson = JSON.parse(localStorage.getItem('catalogo'));
    const obj = stringJson[indice];

    let cart = JSON.parse(localStorage.getItem('carrinho'));

    if(cart){
        cart.push(obj);
    }
    else{
        cart = [obj];
    }

    localStorage.setItem('carrinho', JSON.stringify(cart));

    alert(`${obj.item} adicionado ao carrinho`);
    carrinho();
    console.log(cart);
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