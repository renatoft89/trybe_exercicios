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

  palindromo("arara");

