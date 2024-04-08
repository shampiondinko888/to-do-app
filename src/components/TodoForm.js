import React, { useState } from "react";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setSubmittedValue(inputValue); 
    setInputValue(""); 
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
      {submittedValue && <p>Uneseno: {submittedValue}</p>}{" "}
      {}
    </form>
  );
}

export default TodoForm;
