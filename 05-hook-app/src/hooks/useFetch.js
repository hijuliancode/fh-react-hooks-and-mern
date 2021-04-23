import { useEffect, useState, useRef } from "react"

export const useFetch = ( url ) => {

  const isMounted = useRef(true)

  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    return ( ) => { // cleanup
      // Cuando se remueve o limpia el componente cambia isMounted a false
      // así no se llamará de manera innecesaria el setState y no generará error ni fugas de memoria
      isMounted.current = false
    }
  }, [])

  useEffect(() => {

    setState({ // Reset
      data: null,
      error: null,
      loading: true,
    });

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
        if (isMounted.current) { // El componente esta montado, se puede llamar la data
          setState({
            data: data[0],
            error: null,
            loading: false,
          })
        } else {
          console.log('Componente no montado no es necesario llamar data')
        }
      })
    
  }, [url])

  return state
}
