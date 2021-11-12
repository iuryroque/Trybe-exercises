import React, { Component } from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return(
      <div className="pokedex">
        <h1>
          Pokedex
        </h1>
        <div className="container-pokemon">
          {this.props.pokemons.map((pokemon) =>
          <Pokemon key={ pokemon.id } proPokemon={ pokemon } />)}
        </div>
      </div>
    )
  }
}

export default Pokedex;