import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function ParentComponent() {
  const addTodo = (text) => {
    // Logika za dodavanje zadatka
    console.log("Dodan je novi zadatak:", text);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <ParentComponent />
      <TodoList />
    </div>
  );
}

export default App;
