import React, { useState } from "react";

const InputTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue === "") {
      alert("Molim unesite TO DO");
      return;
    }
    addTodo(trimmedValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Unesite To do"
      />
      <button onClick={handleAddTodo}>Dodaj</button>
    </div>
  );
};

export default InputTodo;
