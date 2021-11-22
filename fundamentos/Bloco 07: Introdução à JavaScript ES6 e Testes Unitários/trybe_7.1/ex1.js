const testingScope = (escopo) => {
  if (escopo === false) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `ifScope ótimo, fui utilizada no escopo;`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  
}

testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.
oddsAndEvens.sort((a, b) => a > b);

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

let resultado

function fatorial(numero) {
  for (let index = 2; index <= numero ; index += 1) {
    resultado *= index
  }
  return resultado;
}
console.log(fatorial(6));

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5));
