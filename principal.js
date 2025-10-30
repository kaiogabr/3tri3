            var subtitulo = document.querySelector(".subtitulo");
			subtitulo.textContent = "Meus Pacientes";
			var marca = document.querySelector(".titulo");
			marca.textContent = "Julia Nutrition";

            

            //acessar a tag TR -> paciente Paulo
            var pacientes = document.querySelectorAll('.paciente');
            for(var i = 0; i < pacientes.length; i++){
                var paciente = pacientes[i];
            //selecionou o conteudo da tag
            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
            console.log(peso);

            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;
            console.log(altura);

            var imc = peso / (altura * altura);
            console.log(imc);
           

            //Variaveis com valor true
            var pesoValido = true; 
            var alturaValida = true; 

            //Definindo quando imc será calculado
            if (pesoValido && alturaValida){
                var tdImc = paciente.querySelector(".info-imc");
                tdImc.textContent = imc.toFixed(1);
            }

            //definindo limite peso e altura, assim sendo FALSO
            if(peso <= 0 || peso > 1000){
                console.log("peso invalido");
               var pesoValido = false;
               tdImc.textContent = "Peso Invalido"
               paciente.classList.add("campo-invalido");
               paciente.style.backgroundColor = "purple";
            }
            if(altura <= 0 || altura > 3.00){
                console.log("altura invalida");
               var alturaValida = false;
               tdImc.textContent = "Altura Invalida"
               paciente.classList.add("campo-invalido");
            

            }
            //quando clicar no titulo, apareça uma mensagem
            subtitulo.addEventListener('click', MostraMensagem);

            function MostraMensagem(){
                alert("Este elemento foi clicado");
            }
        
            }

            //acessar botão
            var botaoAdicionar = document.querySelector("#adicionar-paciente");
            //o que acontece quando clica
            botaoAdicionar.addEventListener ('click', function(event){
                event.preventDefault();
                
                //acessa formulario
            var formulario = document.querySelector("#form-adiciona");
            console.log(formulario);
            
            //caça os valores
            var nome = formulario.nome.value;
            var peso = formulario.peso.value;
            var altura = formulario.altura.value;
            var gordura = formulario.gordura.value;
            
            //cria tag Tr
            var PacienteTr = document.createElement("tr");

            var nomeTd = document.createElement("td");
            var pesoTd = document.createElement("td");
            var alturaTd = document.createElement("td");
            var gorduraTd = document.createElement("td");
            var imcTd = document.createElement("Td");
            
            //adiciona os valores
                nomeTd.textContent = nome;
                pesoTd.textContent = peso;
                alturaTd.textContent = altura;
                gorduraTd.textContent = gordura;
                imcTd.textContent = imc;

            //adiciona as tags na tela do usuário
                PacienteTr.appendChild(nomeTd);
                PacienteTr.appendChild(pesoTd);
                PacienteTr.appendChild(alturaTd);
                PacienteTr.appendChild(gorduraTd);
                PacienteTr.appendChild(imcTd);

                var tabela = document.querySelector("#tabela-pacientes")
                tabela.appendChild(PacienteTr);

            });

            





            
            
            