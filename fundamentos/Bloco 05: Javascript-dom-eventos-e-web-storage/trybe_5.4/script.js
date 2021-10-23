window.onload = function() {
  let backgroundColors = ( ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']);
 
   

// As pessoas devem ter o poder de alterar: 
// 1-Cor de fundo da tela;

let containerButton = document.querySelector('.button-background');
let colorBackground = document.querySelectorAll('body');

containerButton.addEventListener('click', function(){
  for (let index = 0; index < colorBackground.length; index =+1) {
    let colorBackgroundColor = backgroundColors[Math.floor((Math.random() * backgroundColors.length))]
    colorBackground[index].style.backgroundColor = colorBackgroundColor;
    localStorage.setItem("backgroundColorPage", colorBackgroundColor)
  }
 });

 // 2 - Cor do texto;

 let containerP = document.querySelector('.button-textColor');
 let colorParagraph = document.querySelectorAll('p');
 
 containerP.addEventListener('click', function(){
   for (let index = 0; index < colorParagraph.length; index =+1) {
     let colorP = backgroundColors[Math.floor((Math.random() * backgroundColors.length))]
     colorParagraph[index].style.color = colorP;
     localStorage.setItem("colorP", colorP)
   }
  });

// 3 - Tamanho da Fonte
let buttonSize = document.querySelector('.button-fontSize')
let tamanhoFont = document.querySelector('p').style.fontSize = '12px';
  
buttonSize.addEventListener('click', function() {
  
    tamanhoFont = document.querySelector('p').style.fontSize = (parseInt(tamanhoFont)+1)+"px";
    console.log(tamanhoFont);
  
  
})
}
