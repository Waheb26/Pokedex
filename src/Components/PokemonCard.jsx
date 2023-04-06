import "../App.css";


function PokemonCard(props) {
  
  console.log(props)
  

  return (
      <figure className="card">
         <img className="cardImg" src={props.pokemon.imgSrc} alt={props.pokemon.name}></img>
         <figcaption className="cardText">{props.pokemon.name}</figcaption>
         <p className="noImg">???</p>
      </figure>
  )
}

export default PokemonCard;