import PropTypes from "prop-types";


function NavBar({previous, next, pokemonIndex}) {
    
    return (
     <div>
        <button onClick={previous}>Précédent</button>
        <button onClick={next}>Suivant</button>
     </div>
    )
}

export default NavBar