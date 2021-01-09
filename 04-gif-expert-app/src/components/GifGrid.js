import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=8UAKyArOV82MyyYExfQcu8wNwm4G7SsI';
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
  }

  return (
    <span>
      <button className="button is-small is-primary is-outlined mr-1 mb-1">{category}</button>
    </span>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}