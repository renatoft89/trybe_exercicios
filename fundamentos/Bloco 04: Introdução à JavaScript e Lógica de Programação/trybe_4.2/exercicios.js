//exercicio-1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//exercicios-2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log (menu.length)
console.log(indexOfPortfolio);

//exercicio-3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);

//exercicio-4

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i=0; i<groceryList.length; i++){
  console.log(groceryList[i]);
}

//exercicio-5

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for( let lista of names){
  console.log(lista);
}

//APROFUNDE SEUS CONHECIMENTOS EXERCICIO-1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  for ( let index=0; index < numbers.length; index++ ){
    console.log(numbers[index]);
  }

//EXERCICIO-2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for ( let index=0 ; index < numbers.length ; index++ ){
  soma += (numbers[index]);
}
  console.log(soma);

  //EXERCICIO-3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

  for ( let index=0 ; index < numbers.length ; index++ ){
    soma += numbers[index];
    
  }
    let media = soma / numbers.length;
    console.log(media)
//EXERCICIO-4

  if (media>20){
    console.log("Media é maior que 20");
  }else{
    console.log("Valor menor ou igual a 20")
  }

  //EXERCICIO-5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let index=0; index<numbers.length; index++){
  if (numbers[index]>maior){
    maior = numbers[index];
    
  }
}
console.log(maior);

//EXERCICIO-6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar= 0;

for (let index =0; index < numbers.length; index++){
  if(numbers[index]%2!==0){
    impar += 1;
    
  }
}
if (impar === 0){
  console.log("Erro!")
}else{
  console.log(impar);
}

  


//EXERCICIO-7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 1];
let menor = numbers[0];

for (let index=0; index<numbers.length; index++){
  if (numbers[index]<menor){
    menor = numbers[index];
    
  }
}
console.log(menor);

//EXERCICIO-8

let lista = [];

for ( index = 0; index <= 25 ; index++ ){
  lista.push(index);

}
console.log(lista);

//EXERCICIO-9

let lista = [];
let divisao = []

for ( index = 0; index <= 25 ; index++ ){
  lista.push(index)
  divisao[index] = (lista[index]/2);

}

console.log(divisao);


