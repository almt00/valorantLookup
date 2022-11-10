import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoListFilter from "./TodoListFilter";

function App() {
  return (
    <div class="todoapp stack-large">
      <TodoForm />
      <TodoListFilter />
      <TodoList/>
    </div>
  );
}

export default App;
