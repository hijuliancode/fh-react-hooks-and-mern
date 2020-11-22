import React from 'react';
import PropTypes from 'prop-types'

// FC

const PrimeraApp = ({ saludo }) => {
    
    return (
        <>
            {/* <pre>{ JSON.stringify(persona, null, 2) }</pre> */}
            {/* <hr/> */}
            <h1> {saludo} </h1>
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;