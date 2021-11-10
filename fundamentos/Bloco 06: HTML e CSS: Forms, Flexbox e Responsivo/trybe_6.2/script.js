window.onload = function () {
  criarEstados();

  let btnEnviar = document.querySelector('.envia-form')
  btnEnviar.addEventListener('click', enviarForm);


}

function criarEstados() {
  let selectEstado = document.querySelector('#estado')
  let estadosBr = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < estadosBr.length; index +=1) {
    let option = document.createElement('option');
    option.innerText = estadosBr[index];
    option.value = estadosBr[index];

    selectEstado.appendChild(option);
    
  }
}

function enviarForm(event) {
  event.preventDefault();

  let valid = validData();
}

function validData() {
  
}