import React, { Component } from 'react';
import CharacterCard from '../CharacterCard';


export class CharacterList extends Component {
  render() {

    const { characters } = this.props;

    return (
      <section className='card-list'>
        {characters.map(item => <CharacterCard character={item} key={item.id} />)}
      </section>
    )
  }
}

export default CharacterList;
