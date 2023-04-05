import "../App.css";

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard() {
  const pokemon = pokemonList[0]

  return (
      <figure className="card">
         <img className="cardImg" src={pokemon.imgSrc} alt={pokemon.name}></img>
         <p className="noImg">???</p>
         <figcaption className="cardText">{pokemon.name}</figcaption>
      </figure>
  )
}

export default PokemonCard;