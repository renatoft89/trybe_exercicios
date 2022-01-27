import React from 'react'
import './App.css';
import CharacterList from './components/CharacterList';
import Loading from './components/Loading';

const URL = 'https://rickandmortyapi.com/api/character';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filteredCharacters: [],
      isLoading: true,
      search: ''
    }
  }

  componentDidMount() {
    this.getCharacters()
  }


  getCharacters = async () => {
    const { results } = await fetch(URL).then(response => response.json())
    this.setState({ isLoading: false, characters: results, filteredCharacters: results })
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ search: value })
  }

  handleFilterCharacters = (event) => {
    event.preventDefault();
    const { characters, search } = this.state;
    const filteredCharacters = characters.filter(({ name }) => name.toUpperCase().includes(search.toUpperCase()))
    this.setState({ filteredCharacters })
  }

  render() {
    const { filteredCharacters, isLoading } = this.state
    return (
      <main className="App">
        <form onSubmit={this.handleFilterCharacters}>
          <input type='text' placeholder='Rick Sanches...' onChange={this.handleOnChange} />
          <button type='submit'>Buscar</button>
        </form>
        {
          isLoading ? <Loading /> : <CharacterList characters={filteredCharacters} />
        }
      </main>
    );
  }
}

export default App;
