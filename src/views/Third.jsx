import React, { useState } from 'react'
import Form from '../components/Form';

const Third = props => {
    const [pokemon, setPokemon] = useState(null);
    const setData = data => {
        setPokemon(data);
    }
    return(
        <>
        <h1>Select an ability</h1>
        <Form setData={setData} category="ability"/>
        {
            pokemon ? <div>
                <h2>{pokemon.name}</h2>
                <p>Effect: {pokemon.effect_entries[0].effect}</p>
            </div> : ""
        }
        </>
    );
}

export default Third;