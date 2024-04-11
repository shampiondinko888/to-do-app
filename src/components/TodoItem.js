import React from "react";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const { id, inputValue, checked } = todo;

  const handleToggleTodo = () => {
    toggleTodo(id);
  };

  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={handleToggleTodo} />
      <label style={{ textDecoration: checked ? "line-through" : "" }}>
        {inputValue}
      </label>
      <button onClick={handleRemoveTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
