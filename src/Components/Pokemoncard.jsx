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

function Pokemoncard() {
    const pokemon = pokemonList[0]

    return (
        <figure className="card">
           <figcaption className="cardName">{pokemon.name}</figcaption>
           <img className="classImg" src={pokemon.imgSrc}/>
             

        </figure>
        );
    }
  


  export default Bulb;
