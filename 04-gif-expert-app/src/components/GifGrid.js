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
          <div class="notification animate__delay-1s is-success animate__animated animate__flash animate__infinite">
            <p>Cargando...</p>
          </div>
        )
      }
      <h2 className="title is-5 is-capitalized">{ category }</h2>
      <div className="columns is-multiline is-tablet mb-6">
        {
          images.map( image => (
            <div key={ image.id } className="column is-one-quarter">
              <GifGridItem { ...image } />
            </div>
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}