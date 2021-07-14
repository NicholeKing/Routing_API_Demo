import React from 'react'

const ParamTwo = props => {
    return(
        <>
        <h1>This is the ParamTwo component</h1>
        <h3>Your number is: {parseInt(props.num)}</h3>
        {
            console.log(typeof(parseInt(props.num)))
        }
        </>
    );
}

export default ParamTwo;