

var nota = document.getElementById("meu-input").value

if (nota >= 80){
  console.log("Sua nota é: ", nota, "voce foi aprovado");
}

else if (nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera sua nota é: ", nota);
} else (nota < 60);{
  console.log("Você foi reprovada(o)");
}

const comida = 'pão na chapa';
const bebida = 'café';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// Função que mostra o valor do input num alert
function mostrarValor() {
  alert(document.getElementById("meu-input").value);
}

// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("meu-input").onkeypress = function(e) {
  // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
  if (e.keyCode == 13) {
      mostrarValor();
      e.preventDefault();
  }
}

// Evento que é executado ao clicar no botão de enviar
document.getElementById("meu-submit").onclick = function(e) {
  mostrarValor();
  e.preventDefault();
}


  const conditionOne = true;
  const conditionTwo = true;

  console.log(conditionOne && conditionTwo);



const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);


const currentHour = 11;
var message = "";

if (currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >=11 && currentHour < 14){
  message = "Hora do almoço!!!"
}
else if (currentHour >=4 && currentHour < 11){
  message = "Hmmm, cheiro de café recém passado"
}



console.log(message);