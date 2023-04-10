import "../App.css";
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
  
  console.log(pokemon)
  
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string
    }).isRequired,
  }

  return (

    <figure className="card">
      <img className="cardImg" src={pokemon.imgSrc} alt={pokemon.name}></img> <p className="noImg">???</p>
      <figcaption className="cardText">{pokemon.name}</figcaption>
    </figure>
    )
}

export default PokemonCard;