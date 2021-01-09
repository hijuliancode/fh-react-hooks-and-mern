import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category)

  return (
    <>
      { // If is loading
        loading && (
          <div className="column">
            <p>Cargando...</p>
          </div>
        )
      }
      { // If has images
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