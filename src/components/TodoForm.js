import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInput = (event) => {
    setTodo({ ...todo, task: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({
        ...todo,
        id: uuidv4(),
      });
      //reset task input
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          onChange={handleTaskInput}
          value={todo.value}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
