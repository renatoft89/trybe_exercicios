//pegar o click do button
const btnLamp = document.getElementById("light-switch");
btnLamp.addEventListener('click', () => {
  //DISPARA ACTION
  // É O OBJETO type: change_to_dark
  store.dispatch({type: 'CHANGE_TO_DARK'})
})

//estado inicial
const INITIAL_STATE = {
  theme: 'light',
};
//Reducer - com estado e action
const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  return state;
};
//STORE
const store = Redux.createStore(reducer);
console.log(store);
