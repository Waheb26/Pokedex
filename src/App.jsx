import { useState } from 'react'
import './App.css'
import PokemonCard from './Components/PokemonCard'


const pokemonList = [
  {
      name: "BULBASAUR",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "CHARMANDER",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "SQUIRTLE",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "PIKACHU",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "MEW",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleNextClick = () => {
    if (pokemonIndex === pokemonList.length - 1) {
      setPokemonIndex(0);
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  
  const handlePrevClick = () => {
    if (pokemonIndex === 0) {
      setPokemonIndex(pokemonList.length - 1);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  }
  
  return ( 
      <>
     <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 && <button onClick={handlePrevClick}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick}>Suivant</button>}
      </div>
      </>
  )
}

export default App;

