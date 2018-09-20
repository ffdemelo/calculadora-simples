// Criando objetos e variáveis
var botaoCalcula = document.getElementById("botao-calcular");
var botaoSomar = document.getElementById("somar");
var botaoSubtrair = document.getElementById("subtrair");
var botaoMultiplicar = document.getElementById("multiplicar");
var botaoDividir = document.getElementById("dividir");
var botaoOkVazio = document.getElementById("botao-ok");
var campo = document.getElementById("campo-resultado");

// Criando Funções

function somar(){
  document.getElementById("sinal-operacao").innerHTML = "+";
  
}

function subtrair(){
  document.getElementById("sinal-operacao").innerHTML = "-";
}

function multiplicar(){
  document.getElementById("sinal-operacao").innerHTML = "x";
}

function dividir(){
  document.getElementById("sinal-operacao").innerHTML = "/";

}

function calcula(){

  let num1 = document.getElementById("numero1").value;
  let num2 = document.getElementById("numero2").value;
  let operacao = document.getElementById("sinal-operacao").textContent
  let resultado = 0;

  if(num1 == "" || num2 ==""){
    document.getElementById("janela-principal").style.display = "none";
    document.getElementById("janela-mensagem").style.display = "flex";
    document.getElementById("mensagem").innerHTML = "Há campos vazios!";
    return;

  }
  
  if(isNaN(num1) || isNaN(num2)){
    document.getElementById("janela-principal").style.display = "none";
    document.getElementById("janela-mensagem").style.display = "flex";
    document.getElementById("mensagem").innerHTML = "Há campos que não são números!";
    return;
  }
  
  num1 = Number(num1);
  num2 = Number(num2);
  if(num2 === 0 && operacao == "/"){
    document.getElementById("janela-principal").style.display = "none";
    document.getElementById("janela-mensagem").style.display = "flex";
    document.getElementById("mensagem").innerHTML = "Não é possível realizar divisão por zero!";
    return;
  }


  switch(operacao){
    case "+":
      resultado = num1 +num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "x":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }

  document.getElementById("campo-resultado").innerHTML = resultado;

}

function okMensagem(){
  document.getElementById("janela-principal").style.display = "flex";
  document.getElementById("janela-mensagem").style.display = "none";
}

// Associando eventos de ojetos a funções
botaoCalcula.onclick = calcula;
botaoSomar.onclick = somar;
botaoSubtrair.onclick = subtrair;
botaoMultiplicar.onclick = multiplicar;
botaoDividir.onclick = dividir;
botaoOkVazio.onclick = okMensagem;
