//EXERCICIO-1

let n=5;
let ast = '';

for( let index=0; index< n; index++){
  for(let index2=0; index2<n; index2++){
    ast += ('*')
  }
  ast += "\n";
}
 console.log(ast);

 //EXERCICIO-2

let n=5;
let ast = '';

for( let index=0; index< n; index++){
    
  for(let index2=0; index2<=index; index2++){
    ast  +='*'
    
  } 
  ast +='\n';
}
console.log(ast);
 

//EXERCICIO-3
let n=5;
let ast = '*';
let linha = '';
let coluna = n;

for( let index=0; index< n; index++){
  armazenador = armazenador + (' ');
  armazenador += ast
  armazenador+= '\n'
}

console.log(armazenador);
 