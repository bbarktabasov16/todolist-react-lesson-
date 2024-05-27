import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-item">
      {todo.text}
      <div className="btns">
        <button className="complete">complete</button>
        <button className="delete">delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
