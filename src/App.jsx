import { useState } from 'react'
import './App.css'
import PokemonCard from './Components/PokemonCard'
import NavBar from './Components/NavBar';

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

  const handleNextClick = () => setPokemonIndex(pokemonIndex + 1);
  
  const handlePrevClick = () => setPokemonIndex(pokemonIndex - 1);
  
  return ( 
      <div>
     <nav>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 && <button onClick={handlePrevClick}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick}>Suivant</button>}
      <NavBar prev={handlePrevClick} next={handleNextClick} />
      </nav>
      </div>
  )
}

export default App;

