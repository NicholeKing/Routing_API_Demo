import React, { useState } from 'react'
import Form from '../components/Form';

const Second = props => {
    const [pokemon, setPokemon] = useState(null);
    const setData = data => {
        setPokemon(data);
    }
    return(
        <>
        <h1>Select a move</h1>
        <Form setData={setData} category="move"/>
        {
            pokemon ? <div>
                <h2>{pokemon.name}</h2>
                <p>Power: {pokemon.power}</p>
                <p>Type: {pokemon.type.name}</p>
            </div> : ""
        }
        </>
    );
}

export default Second;