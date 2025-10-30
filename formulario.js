//acessar botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//o que acontece quando clica
botaoAdicionar.addEventListener ('click', function(event){
    event.preventDefault();
    
    //acessa formulario
var formulario = document.querySelector("#form-adiciona");

var paciente = buscaValoresFormulario(formulario);

var PacienteTr = criarTr(paciente);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(PacienteTr);
formulario.reset();


});

function buscaValoresFormulario(formulario){

//caça os valores
var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularImc(formulario.peso.value,formulario.altura.value)

}

return paciente;

}

function criarTr(paciente){

    //cria tag Tr
var PacienteTr = document.createElement("tr");
PacienteTr.classList.add("paciente");

//cria tag Td
var nomeTd = criarTd(paciente.nome, "info-nome");
var pesoTd = criarTd(paciente.peso, "info-peso");
var alturaTd = criarTd(paciente.altura, "info-altura");
var gorduraTd = criarTd(paciente.gordura, "info-gordura");
var imcTd = criarTd(paciente.imc, "info-imc");

    //adiciona as tags na tela do usuário
    PacienteTr.appendChild(nomeTd);
    PacienteTr.appendChild(pesoTd);
    PacienteTr.appendChild(alturaTd);
    PacienteTr.appendChild(gorduraTd);
    PacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(PacienteTr);


    return PacienteTr;

}

function criarTd(dado, classe){
    //valor imutavel
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}