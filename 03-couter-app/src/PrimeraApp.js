import React from 'react';

// FC

const PrimeraApp = () => {
    const saludo = 'Hola Mundo!'
    const persona = {
        nombre: 'Meraki',
        edad: 7
    }
    return (
        <>
            {/* <pre>{ JSON.stringify(persona, null, 2) }</pre> */}
            {/* <hr/> */}
            <h1> {saludo} </h1>
            <p>Mi primera aplicación</p>
        </>
    );
}

export default PrimeraApp;