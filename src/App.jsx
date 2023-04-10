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

  return ( 
      <div>
     <nav>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
      </nav>
      </div>
  )
}

export default App;

