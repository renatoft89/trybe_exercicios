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
  
