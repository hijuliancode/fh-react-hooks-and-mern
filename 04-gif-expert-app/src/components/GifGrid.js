import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const [ images, setImages ] = useState([])

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=8UAKyArOV82MyyYExfQcu8wNwm4G7SsI`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        externalUrl: `${img.url}/tile`,
      }
    })
    console.log(gifs);
    setImages(gifs)
  }

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