import React from "react";

export default function Todo({ todo, toggleComplete, deleteTodo }) {
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckBoxClick} />
      {todo.task}
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
