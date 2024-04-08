import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [];

  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
