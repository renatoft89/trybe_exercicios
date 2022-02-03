import React from 'react'

const URL = "https://api.chucknorris.io/jokes/random";

class App extends React.Component {
  constructor() {
    super()
    this.state = { joke: '' }
  }

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then(({ value }) => this.setState({ joke: value }));
  }

  render() {
    return (
      <main>
        <h1>Piadas do Chuck Norris</h1>
        <p>{this.state.joke}</p>
      </main>
    );
  }
}

export default App