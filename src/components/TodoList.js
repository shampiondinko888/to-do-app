import React, { useState } from "react";

const ITEM_KEY = "todoList";

function removeTodo(event, id) {
  const localStorageTodos = JSON.parse(localStorage.getItem(ITEM_KEY));
  const newLocalStorageTodos = localStorageTodos.filter(
    (todo) => todo.id !== id
  );
  localStorage.setItem(ITEM_KEY, JSON.stringify(newLocalStorageTodos));
  event.currentTarget.parentNode.remove();
}

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(ITEM_KEY)) || []
  );

  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={(event) => removeTodo(event, todo.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
