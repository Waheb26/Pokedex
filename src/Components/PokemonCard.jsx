import "../App.css";
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
  
  console.log(pokemon)
  
  PokemonCard.PropTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string
    }).isRequired,
  }

  return (

     <>
      <figure className="card">
         <img className="cardImg" src={pokemon.imgSrc} alt={pokemon.name}></img>
         <figcaption className="cardText">{pokemon.name}</figcaption>
         <p className="noImg">???</p>
      </figure>
      </>
  )
}

export default PokemonCard;