
test( 'Mi primera prueba, debe informar que es lo que estamos probando', () => {
    const isActive = true;
    if ( isActive ) {
        throw new Error('No está activo')
    }
} )
