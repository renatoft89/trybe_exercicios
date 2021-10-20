
function seleciona(){
  document.querySelector('section#elementoOndeVoceEsta');
}
seleciona();

// 2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function  selecionaAddCor() {
  document.querySelector('section#elementoOndeVoceEsta').parentNode;
  mudaCorPai = document.querySelector('section#elementoOndeVoceEsta').parentNode;
  mudaCorPai.style.color = "rgb(220, 20, 60)"; 
}
selecionaAddCor();


// 3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
function addText() {
  document.querySelector('section#primeiroFilho');
  texto = document.querySelector('section#primeiroFilho');
  texto.innerText = "Estamos na Trybe 2";   
}

addText();

// 4-Acesse o primeiroFilho a partir de pai .
function enterPai(params) {
  let v1 = document.querySelector('section#pai').firstElementChild;
  console.log(v1+ '4-Acesse o primeiroFilho a partir de pai .');
}  

enterPai();

// 5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
function enterElementYou(params) {
  let v2 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
  console.log(v2+ '5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .');
}  

enterElementYou();

// 6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
function enterText() {
  let v3 = document.querySelector('section#elementoOndeVoceEsta').parentNode;  
  console.log(v3+ '// 6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .');
}

enterText();

// 7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
function enterTerceiroFilho() {
  let v4 = document.querySelector('section#elementoOndeVoceEsta').nextSibling.nextSibling; 
  console.log(v4+ '7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .');
}

enterTerceiroFilho();

// 8-Agora acesse o terceiroFilho a partir de pai .
function terceiroPartirFilho() {
  document.querySelector('section#pai').lastElementChild.previousElementSibling;   
}

terceiroPartirFilho();
