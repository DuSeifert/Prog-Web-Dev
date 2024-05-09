let nome = document.getElementById("nome");
let contato = document.getElementById("contato");
let qa = document.getElementById("qa");
let disciplina = document.getElementById("disciplina");
let projetor = document.getElementById('projetor');
let reserva = document.getElementById("reserva");

reserva.onclick = function () {
	if (
		nome.value == "" ||
		contato.value == "" ||
		qa.value == "" ||
		disciplina.value == ""
	) {
		alert("Preencha todos os campos");
	} else {
		if (confirm(`Nome: ${nome.value}\nContato: ${contato.value}\nQuantidade de alunos: ${qa.value}\nDisciplina: ${disciplina.value}\nProjetor?: ${projetor.value}\n\n Deseja confirmar os dados?`)
        ){
			alert("Sala reservada");
		}
        else {
			alert("Cancelando a reserva");
		}
	}
};
