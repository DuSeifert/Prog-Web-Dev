let item = document.getElementById("item");
let preco = document.getElementById("preco");
let descricao = document.getElementById('descricao');
atualizar();

function addItem() {
	const obj = {
		item: item.value,
		preco: preco.value,
        descr: descricao.value
	};

    let catalogo = JSON.parse(localStorage.getItem('catalogo'));
    
    if(catalogo){
        catalogo.push(obj);
    }
    else{
        catalogo = [obj];
    }
    
    localStorage.setItem('catalogo', JSON.stringify(catalogo));

    item.value = '';
    preco.value = '';
    descricao.value = '';
    atualizar();
}

function atualizar() {
	const stringJson = localStorage.getItem("catalogo");
	const vet = JSON.parse(stringJson);

    carrinho();
	imprimir(vet);
}

function imprimir(vet) {
	var lista = document.getElementById("lista");
	lista.innerHTML = "";

    if(vet){
        for(let i=0 ; i<vet.length ; i++){
            let obj = vet[i];

		    let p = document.createElement("div");
		    p.innerHTML = `
                <p id="pnome" >${obj.item}</p>
                <p id="ppreco" >${obj.preco}</p>
                <p id="pdescr" >${obj.descr}</p>
                <p id="pacoes" >
                    <button class="acaoBut" onclick = 'editar(${i})'>Editar</button>         
                    <button class="acaoBut" onclick = 'remover(${i})'>Remover</button>         
                </p>
            `;
		    lista.appendChild(p);
        }
    }
    else{
        let p = document.createElement('p');
            p.innerHTML = `
                Catálogo vazio :(
            `
            lista.appendChild(p);
    }
    console.log(vet);
}

function editar(indice){
    let edit = JSON.parse(localStorage.getItem('catalogo'));

    item.value = edit[indice].item;
    preco.value = edit[indice].preco;
    descricao.value = edit[indice].descr;

    edit.splice(indice, 1);    
    localStorage.removeItem('catalogo');

    const stringJson = JSON.stringify(edit);
    localStorage.setItem('catalogo', stringJson);

    atualizar();    
}

function remover(indice){
    let obj = JSON.parse(localStorage.getItem('catalogo'));
    if(confirm(`Deseja excluir '${obj[indice].item}'?`)){
        obj.splice(indice, 1);
        localStorage.removeItem('catalogo');

        const stringJson = JSON.stringify(obj);
        localStorage.setItem('catalogo', stringJson);
        atualizar();
    }
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
