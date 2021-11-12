import './App.css';
import React, { Component} from 'react';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import Data from './data';

class App extends Component {
  render() {
    return (
      <Pokedex pokemons={ Data }/>
    );
  }
}

export default App;
