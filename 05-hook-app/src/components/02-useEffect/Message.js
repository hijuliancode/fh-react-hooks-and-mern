import React, { useEffect, useState } from 'react'

export const Message = (e) => {

  const [ coords, setCoords ] = useState({ x: 0, y: 0 })

  const { x, y } = coords

  const mouseMove = (e) => {
    setCoords({ x: e.x, y: e.y })
  }

  useEffect(() => {
    // console.log('Componente montado')
    window.addEventListener('mouseover', mouseMove)

    return () => {
      // console.log('Componente desmontado');
      window.removeEventListener('mouseover', mouseMove)
    }
  })

  return (
    <div>
      <h1>Componente Mensaje</h1>
      <p>
        x: {x}, y: {y}
      </p>
    </div>
  )
}