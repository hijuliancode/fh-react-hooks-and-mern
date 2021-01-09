import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  // const [ images, setImages ] = useState([])

  const { loading } = useFetchGifs()

  console.log(loading);

  // useEffect(() => {
  //   getGifs(category)
  //     .then( setImages )
  // }, [category])

  return (
    <>
    <div className="column">
      <h3>{ category }</h3>
      { loading ? 'loading...' : 'Fin de carga' }
    </div>

      {/* {
        images.map( image => (
          <div key={ image.id } className="column is-one-quarter">
            <GifGridItem { ...image } />
          </div>
        ))
      } */}
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}