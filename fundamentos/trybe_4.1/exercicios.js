//exercicio-1

const operador = ('*');

var num1 = 6;
var num2 = 5;

if (operador == '+'){
  console.log(num1+num2);
}

else if (operador == '-'){
  console.log(num1-num2);
}
else if (operador == '/'){
  console.log(num1/num2);
}
else if (operador == '*'){
  console.log(num1*num2);
}
else {
  console.log('caractere invalido');
}

//exercicio-2

const numero1 = 14;
const numero2 = 15;

if( numero1>numero2)
console.log(numero1)
else{
  console.log(numero2);
}

//exercicio-3

const n1 = 50;

const n2 = 40;

const n3 = 2;

if(n1>n2&&n1>n3)
  console.log(n1)
else if(n2>n1&&n2>n3)
  console.log(n2)
else{
  console.log(n3);
}  

//exercicio-4
const numero = -14;

if( numero>0)
console.log("positive")
else{
  console.log("negativo");
}

//exercicio-5

const ang1 = 30;

const ang2 = 60;

const ang3 = 90;


if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("Erro");

} else if ((ang1 + ang2 + ang3) == 180) {
  console.log("true");

} else {
  console.log("false");
}
  
//exercicio-6

var peça = "cAVALO".toLocaleLowerCase();


switch (peça){
  case "bispo":
    console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro");
    break;


  case "torre":
    console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
    break;


  case "cavalo":
    console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.");
    break;


  case "rainha":
    console.log("A Rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
    break;


  case "rei":
    console.log("O rei pode se mover para qualquer casa adjacente.");
    break;

    default:
      console.log("Erro não faz parte do jogo");
}

//exercicio-7

var nota = 60;


if (nota<0 || nota>100){
  console.log("Verificar Nota - Erro");
}
else if (nota>=90){
  console.log("Sua Nota é A");
}
else if (nota>=80){
  console.log("Sua nota é B");
}
else if (nota>=70){
  console.log("Sua nota é C");
}
else if (nota>=60){
  console.log("Sua nota é D");
}
else if (nota>=50){
  console.log("Sua nota é E");
}
else if (nota<50){
  console.log("Sua nota é F");
}

//exercicio-8

const a = 11;

const b = 17;

const c = 12;

var par = false

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
  var par = true;
}
console.log(par);

//exercicio-9

const a = 13;

const b = 18;

const c = 122;

var impar = false

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
  var impar = true;
}
console.log(impar);
