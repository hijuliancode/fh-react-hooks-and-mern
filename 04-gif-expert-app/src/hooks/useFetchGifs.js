import { useEffect, useState } from 'react'
import { getFetchGifs } from '../helpers/getFetchGifs'

export const useFetchGifs = ( category ) => {
  const [ state, setState ] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getFetchGifs(category)
      .then( result => {
        setState({
          data: result,
          loading: false
        })
      })
  }, [ category ])

  return state // { data: [], loading: true }
}