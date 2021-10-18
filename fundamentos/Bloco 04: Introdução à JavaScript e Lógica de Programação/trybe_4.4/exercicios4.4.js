let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log('Bem Vinda ',info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim';

console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for( index in info){
  console.log(index)
}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for( index in info){
  console.log(info[index])
}

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'r CoChristmas on Bear Mountain, Dell's Foulor Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (index in info){
  if(index === 'recorrente'&&
  info[index]=== 'Sim' &&
  info2[index] === 'Sim'
  ){
    console.log('Ambos Recorrentes')
  }else{
  
    console.log(info[index], 'e', info2[index]);
  }
}

//FUNÇÕES:

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


function palindromo(frase) {

  let fraseSplit = frase.split("");

  let fraseReverse = fraseSplit.reverse('');

  let fraseJoin = fraseReverse.join('');  

  if ( fraseJoin===frase) {
    verifica = true ;
      
  }else{
    verifica = false;
  }
  if (verifica === false){
    console.log(frase +' não é um palindromo!')
  }else{
    console.log(frase + ' é um palindromo!')
  }
  return fraseJoin;
}  

  palindromo("pele");

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorValor(lista){
  let maior = 0;
  for (let key in lista){
    if(lista[maior] < lista[key]){
      maior = key;
    }
  }

  return maior;
  
}
console.log(maiorValor([27, 39, 6, 7, 10, 16]));

// //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .


function menorValor(lista){
  let menor = 0;
  for (let key in lista){
    if(lista[menor] > lista[key]){
      menor = key;
    }
  }

  return menor;
  
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function contaCaracter(nomes){
  let contador = nomes[0];
  for (let key in nomes) {    
    if (contador.length < nomes[key].length){
      contador = nomes[key];
    }
  }
  return contador;
}

console.log(contaCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
