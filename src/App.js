import React, { useState, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import "./App.css";

const ITEM_KEY = "todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem(ITEM_KEY));
    if (localStorageTodos) {
      setTodos(localStorageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ITEM_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (inputValue) => {
    const id = Date.now();
    const newTodo = {
      id,
      inputValue,
      checked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1> {/* Dodaj naslov ovdje */}
      <InputTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
