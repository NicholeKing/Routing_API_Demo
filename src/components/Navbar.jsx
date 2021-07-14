import React from 'react'
import {Link} from '@reach/router';

const Navbar = props => {
    return(
        <h3>
            <Link to="/"><button>Pokemon</button></Link> | 
            <Link to="/moves">Moves</Link> | 
            <Link to="/abilities">Abilities</Link></h3>
    );
}

export default Navbar;