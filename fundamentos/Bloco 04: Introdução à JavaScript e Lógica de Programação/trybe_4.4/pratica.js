//OBJETOS

let player = {
  name : 'Marta',
  lastName : 'Silva',
  age : 34,
  medals : { golden: 2, silver: 3 },
  bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log('A jogadora: ', player.name + player.lastName, 'Tem ',player.age, 'anos e conquistou ', player.medals.golden, ' medalhas de Ouro e', player.medals.silver, 'de prata!');

console.log('A jogadora: ', player.name + player.lastName, 'foi eleita a melhor do mundo por:',player.bestInTheWorld.length, 'vezes');

console.log('A jogadora: ', player.name + player.lastName,', conquistou ', player.medals.golden, ' medalhas de Ouro e', player.medals.silver, 'de prata!');


console.log(player.bestInTheWorld[0])//Ano 2006

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

console.log(car.type)

//FOR IN

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let index in names) {
  console.log(names[index]);
}

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log(index, car[index])
}