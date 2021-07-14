import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Form = props => {
    const [id, setId] = useState(1);
    const [resetPokemon, setResetPokemon] = useState(false);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/${props.category}/${id}`)
            .then(res => props.setData(res.data))
    }, [resetPokemon])
    const onSubmitHandler = e => {
        e.preventDefault();
        setResetPokemon(!resetPokemon);
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="id" onChange={e => setId(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;
