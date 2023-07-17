import React from "react";

export const TodoItem = ({todo, onDeleteTodo,onToggleTodo}) => {
  return (
      <li className="list-group-item d-flex justify-content-between">
        <span aria-label="span" onDoubleClick={()=>onToggleTodo(todo.id)} className={`align-self-center ${todo.done ? 'text-decoration-line-through':''}`}>{todo.description}</span>
        <button aria-label="btnBorrar" className="btn btn-danger" onClick={()=>onDeleteTodo(todo.id)}>Borrar</button>
      </li>
  );
};
