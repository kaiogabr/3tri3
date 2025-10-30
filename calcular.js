            var subtitulo = document.querySelector(".subtitulo");
			subtitulo.textContent = "Meus Pacientes";
			var marca = document.querySelector(".titulo");
			marca.textContent = "Kaio Nutrição";

            

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

            //calcular imc
            var imc = calcularImc(peso,altura);
            console.log(imc);
           

            //Variaveis com valor true
            var pesoValido = true; 
            var alturaValida = true; 

            //Definindo quando imc será calculado
            if (pesoValido && alturaValida){
                var tdImc = paciente.querySelector(".info-imc");
                tdImc.textContent = calcularImc(peso,altura);
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
         function calcularImc(peso,altura){
            var imc = 0;

            imc = peso/(altura*altura);

            return imc.toFixed(1);
         }
            

            





            
            
            