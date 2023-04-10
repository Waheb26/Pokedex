import { useState } from 'react'
import './App.css'
import PokemonCard from './Components/PokemonCard'
import NavBar from './Components/NavBar'
import {useEffect} from 'react'

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

  useEffect(() => {
    console.log("welcome this is an automatic message")
    alert('hello pokemon trainer :)')
  },
    [])
   
    useEffect(() => {
      if (pokemonList[pokemonIndex].name === "PIKACHU") {
        alert("pika pikachu !!!")
      }
    }, [pokemonIndex, pokemonList])
  
  return ( 
      <div>
     <nav>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      
      <NavBar previous={handlePrevClick} next={handleNextClick} pokemonIndex= {pokemonIndex} />
      </nav>
      </div>
  )
}

export default App;

