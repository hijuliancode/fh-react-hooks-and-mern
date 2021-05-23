import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext)

  const [
    {
      name,
      email,
    },
    handleInputChange, reset
  ] = useForm({
    name: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('=> name', name)
    console.log('=> email', email)

    if(name.trim().length <= 1 || email.trim().length <= 1) {
      return;
    }

    const newUser = {
      id: new Date().getTime(),
      name,
      email
    }

    setUser(newUser)
    reset()
  }

  return (
    <div>
      <h1>LoginScreen - Agregar Usuario</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-4"
          placeholder="Nombre..."
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email..."
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary btn-block mt-4"
        >
          Agregar
        </button>
      </form>
    </div>
  )
}
