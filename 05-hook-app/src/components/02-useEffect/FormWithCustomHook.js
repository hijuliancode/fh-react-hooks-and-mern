import React, { useEffect } from 'react'
import { useForm } from './useForm'

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formValues 

  useEffect(() => {
    console.log('Email Cambio');
  }, [email])


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('formValues', formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1> 
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
      </div>
      <div className="form-group">
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      <button className="btn btn-primary" type="submit" >Guardar</button>
    </form>
  )
}
