import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {

    setState({ // Reset
      data: null,
      error: null,
      loading: true,
    });

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {
        setState({
          data: data[0],
          error: null,
          loading: false,
        })
      })
    
  }, [url])

  return state
}
