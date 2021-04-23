import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef(null)

  const handleClick = () => {
    console.log(inputRef)
    inputRef.current.select()
  }

  return (
    <>
     <h1>useRef - focusScreen</h1> 

     <div className="form-group">

       <input
        ref={inputRef}
        className="form-control"
        placeholder="Hola Mundo" />

       <button 
        onClick={handleClick}
        className="btn btn-primary mt-2"
        type="button"
        >
          Click
        </button>
     </div>
    </>
  )
}
