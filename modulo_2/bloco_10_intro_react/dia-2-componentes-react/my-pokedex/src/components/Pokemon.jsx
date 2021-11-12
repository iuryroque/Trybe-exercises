import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { 
      name,
      type,
      averageWeight,
      image,
    } = this.props.proPokemon
    return(
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Average weight: ${averageWeight.value}
          ${averageWeight.measurementUnit}` }</p>
        </div>
        <div>
          <img src={ image } alt={ name } />
        </div>
      </div>
    )
  }
}

export default Pokemon;