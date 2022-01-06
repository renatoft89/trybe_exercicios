import React, { Component } from "react";

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = { 
    nome: '',
    dissertacao: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.' 
  }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ nome: event.target.value });
    
  }

  handleChangeTextArea = (event) => {
    this.setState({ dissertacao: event.target.value });
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.nome + this.state.dissertacao);
    console.log(this.state.nome);
    event.preventDefault(); // nao recarrega a pagina
  }

  render() {
    const { nome } = this.state
    const { dissertacao } = this.state

    return (
      <div>
        <h1>Meus Formularios - Estados e React</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={ nome } onChange={this.handleChange} />
          </label>
          <label>
            Dissertação:
            <textarea value={ dissertacao } name="dissertacao" onChange={this.handleChangeTextArea} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    )
  }
}

export default Form