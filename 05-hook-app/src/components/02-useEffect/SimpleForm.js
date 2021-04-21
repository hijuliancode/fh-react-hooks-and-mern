import React, { useState, useEffect } from 'react'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  useEffect(() => { // Recomendado usar 1 useEffect por cada propiedad/elemento que querramos seguir
    console.log('SimpleForm!');
  }, [])

  useEffect(() => {
    console.log('formState cambio');
  }, [formState])

  useEffect(() => {
    console.log('email cambio');
  }, [email])

  const handleInputChange = ({ target }) => { // e.target
    setFormState({
      ...formState,
      [target.name]: [target.value]
    })
  }

  return (
    <>
      <h1>SimpleForm</h1> 
      <hr/> 

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu Nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="hola@webinicio.co"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>
    </>
  )
}
