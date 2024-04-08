import React, { useState } from "react";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState(""); // Dodatno stanje za prikaz unesenih vrijednosti

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setSubmittedValue(inputValue); // Postavljamo unesenu vrijednost u stanje za prikaz
    setInputValue(""); // Resetujemo input polje nakon submita
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Ažuriramo stanje input vrijednosti dok se mijenja
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange} // Dodajemo event handler za promjenu inputa
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
      {submittedValue && <p>Uneseno: {submittedValue}</p>}{" "}
      {/* Prikaz unesenog teksta ispod inputa */}
    </form>
  );
}

export default TodoForm;
