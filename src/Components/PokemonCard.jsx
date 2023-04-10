import "../App.css";
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
    if (pokemon.imgSrc) {

      return (
          <figure className="card">
              <img className="cardImg"src={pokemon.imgSrc} alt={pokemon.name} />
              <figcaption className="cardText">{pokemon.name}</figcaption>
          </figure>
      )
   }
    else {
      return <figure>
          <p className="noImg"> ??? </p>
          <figcaption>{pokemon.name}</figcaption>
      </figure>
    

  }
  }

export default PokemonCard;