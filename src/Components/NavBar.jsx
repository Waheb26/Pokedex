import PropTypes from "prop-types";
import React, {useState} from 'react'


function NavBar ({ pokemonList, pokemonIndex, setPokemonIndex }) {

  const [pokemonIndex, setPokemonIndex] = useState(0)

    const handleNextClick = () => setPokemonIndex(pokemonIndex + 1);
  
    const handlePrevClick = () => setPokemonIndex(pokemonIndex - 1);

    const handleClickIndex = (index) => {setPokemonIndex(index)}

    return (
    <>
       <div>
          {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handleClickIndex(index)}>{pokemon.name}</button>))} 
       </div>

    </>
    )
}

export default NavBar