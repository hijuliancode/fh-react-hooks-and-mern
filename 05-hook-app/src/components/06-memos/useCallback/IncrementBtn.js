import React from 'react'

export const IncrementBtn = React.memo(({increment}) => {
  console.log('IncrementBtn')
  return (
    <button
      onClick={ () => increment(45) }
      className="btn btn-primary">
        Increment
    </button>
  )
})