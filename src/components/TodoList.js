import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, id) => (
          <Todo
            key={id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
