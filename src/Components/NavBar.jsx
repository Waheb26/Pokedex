import PropTypes from "prop-types";


function NavBar(prev, next) {
    return (
     <div>
        <button onClick={prev}>Précédent</button>
        <button onClick={next}>Suivant</button>
     </div>
    )
}

export default NavBar