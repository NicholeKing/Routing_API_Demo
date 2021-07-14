import React, { useState } from 'react'
import Form from '../components/Form';

const First = props => {
    const [pokemon, setPokemon] = useState(null);
    const setData = data => {
        setPokemon(data);
    }
    return(
        <>
        <h1>Select a pokemon</h1>
        <Form setData={setData} category="pokemon"/>
        {
            pokemon ? <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
                <p>Type: {pokemon.types.map((type) => <span>{type.type.name} </span>)}</p>
            </div> : ""
        }
        </>
    );
}

export default First;