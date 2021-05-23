import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  console.log(description);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action); // Es una funcion a la cual le mandamos una acción y ella sabe a que reducer debe enviar la información y cuando cambie el state va a redibujar lo que cambie
    reset();
  };

  const handleRemoveTask = (e, todoId) => {
    e.preventDefault()

    const action = {
      type: 'remove',
      payload: todoId
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  return (
    <div>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p
                  onClick={() => handleToggle(todo.id)}
                  className={`${todo.done && 'complete'}`.trim()}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button onClick={(e) => handleRemoveTask(e, todo.id)} className="btn btn-danger">X</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender ..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-4 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
