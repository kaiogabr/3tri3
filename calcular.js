//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
var nome = document.querySelector(".titulo");
nome.textContent = "Kaio Nutrição";
subtitulo.content = "Meus Pacientes";


//acessar a tag tr - paciente Paulo
    var pacientes = document.querySelectorAll(".paciente");
    for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    
    //seleciona o conteúdo peso da tag
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    console.log(peso);

    //seleciona o conteúdo altura da tag
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    console.log(altura);

    //calcula o imc
    var imc = peso / (altura * altura);
    console.log(imc);

    //variaveis com valor true
    var pesoValido = true;
    var alturaValido = true;

    //acessa e altera o imc
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
   

    //define quando o imc sera calculado
    if (pesoValido && alturaValida){
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = Imc.toFixed(1);
      }
        

    if(peso <= 0 || peso > 1000){
       console.log("peso invalido");
       var pesoValido = false;
       tdImc.textContent = "Peso Invalido"
       paciente.classList.add("campo-invalido");
       paciente.Style.backgroundcolor = "red";
    }


    if(altura <= 0 || altura> 3.00){
       console.log("altura invalida");
       var alturaValida = false;
       tdImc.textContent = "Altura Invalida"
       paciente.classList.add("campo-invalido");
    }

    }



    //quando clicar no titulo
    subtitulo.addEventListener('click',mostraMensagem);

    function mostraMensagem(){
      alert("Este elemento foi clicado");
    }

        
     }   
         function calcularImc(peso,altura){
            var imc = 0;

            imc = peso/(altura*altura);

            return imc.toFixed(1);
    }
            

            





            
            
            