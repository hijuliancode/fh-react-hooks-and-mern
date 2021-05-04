import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

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
              <li key={todo.id} className="list-group-item complete">
                <p>
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">X</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <form>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender ..."
              autocomplete="off"
            />
            <button className="btn btn-outline-primary mt-4 btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
