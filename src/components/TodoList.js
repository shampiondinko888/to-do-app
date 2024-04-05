import React from "react";

function TodoList() {
  // Dohvatite todo listu iz stanja ili lokalnog spremišta
  const todos = [];

  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.inputValue}</li>
      ))}
    </ul>
  );
}

export default TodoList;
