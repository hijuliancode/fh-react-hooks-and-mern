import React from 'react'
import PropTypes from "prop-types";

export const GifGridItem = ( { url, title, externalUrl } ) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <div className="card-image">
        <a href={ externalUrl } target="_blank" className="image is-4by3 animate__animated animate__fadeIn animate__fast" rel="noreferrer">
          <img src={ url } alt={ title } />
        </a>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{ title }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
}