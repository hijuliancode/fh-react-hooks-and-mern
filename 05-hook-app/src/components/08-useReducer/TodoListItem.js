import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && 'complete'}`.trim()}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={(e) => handleDelete(e, todo.id)} className="btn btn-danger">X</button>
    </li>
  )
}
