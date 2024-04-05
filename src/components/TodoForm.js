import React, { useState } from "react";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    // Dodajte logiku za dodavanje todo-a
    setInputValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
