// apiScript.js     
function append(data) {
  const h2 = document.getElementById('jokeContainer');

  const p = document.createElement('p');
  const divNome = document.createElement('div');


  divNome.innerHTML = data.joke;

  p.appendChild(divNome);

  h2.appendChild(p);
}


const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    // .then(response => console.log(data))
    .then(response => append(response))
};

window.onload = () => fetchJoke();
