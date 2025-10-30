 //acessa o botao
    var botaoAdicionar = document.querySelector("#adicionar-paciente");

    //o que acontece quando clica
    botaoAdicionar.addEventListener ('click', function(event){
      event.preventDefault()

 //acessa o formulario
 var formulario = document.querySelector("#form-adiciona");
 var paciente = buscaValoresFormulario(formulario);
 var pacientesTr = criarTr(paciente);
 
 var tabela = document.querySelector("#tabela-pacientes")
 tabela.appendChild(pacienteTr);
 formulario.reset();



console.log(formulario);

 //caça os valores
var paciente = {
 nome: formulario.nome.value,
 peso: formulario.peso.value,
 altura: formulario.altura.value,
 gordura: formulario.gordura.value,
 imc: calcularImc(formulario.peso.value,formulario.altura.value)
}

return pacientes;

}

function criarTr(paciente){

//cria tag tr
 var pacienteTr = document.createElement("tr");
 pacienteTr.classList.add("paciente");

 //cria tag Td
var nomeTd = criarTd(paciente.nome, "info-nome");
var pesoTd = criarTd(paciente.peso, "info-peso");
var alturaTd = criarTd(paciente.altura, "info-altura");
var gorduraTd = criarTd(paciente.gordura, "info-gordura");
var imcTd = criarTd(paciente.imc, "info-imc");

 //Adiciona as tags na tela do usuario
      pacienteTr.appendChild(nomeTd);
      pacienteTr.appendChild(pesoTd);
      pacienteTr.appendChild(alturaTd);
      pacienteTr.appendChild(gorduraTd);
      pacienteTr.appendChild(imcTd);

      var tabela = document.querySelector("#tabela-pacientes")
      tabela.appendChild(pacienteTr);

      return pacientesTr;

}

function criarTd(dado, classe){
 //valor imutavel
 const td = document.createElement("td");
 td.textContent = dado;
 td.classList.add(classe);

 return td;
}