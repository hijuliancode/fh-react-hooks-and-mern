import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  const [ images, setImages ] = useState([])

  useEffect(() => {
    getGifs(category)
      .then( setImages )
  }, [category])

  return (
    <>
      {
        images.map( image => (
          <div key={ image.id } className="column is-one-quarter">
            <GifGridItem { ...image } />
          </div>
        ))
      }
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}