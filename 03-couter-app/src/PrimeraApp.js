import React from 'react';
import PropTypes from 'prop-types'

// FC

const PrimeraApp = ({ saludo, subtitle }) => {
    
    return (
        <>
            {/* <pre>{ JSON.stringify(persona, null, 2) }</pre> */}
            {/* <hr/> */}
            <h1> {saludo} </h1>
            <p>{subtitle}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitle: 'Mi primera aplicación'
}

export default PrimeraApp;