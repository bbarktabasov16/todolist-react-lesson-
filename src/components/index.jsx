import React from "react";

const TodoItem = ({ todo, completeTodo, deleteTodo, id }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => completeTodo(id)}
      />
      <span>{todo.text}</span>
      <div className="btns">
        {/* <button onClick={() => completeTodo(id)} className="complete">complete</button> */}
        <button onClick={() => deleteTodo(id)} className="delete">
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
