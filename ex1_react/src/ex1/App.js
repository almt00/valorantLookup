import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoListFilter from "./TodoListFilter";

function App() {
  const [activity, setActivity] = useState("");
  const [globState, setGlobState] = useState("all");

  return (
    <div class="todoapp stack-large">
      <TodoForm setActivity={setActivity} />
      <TodoListFilter globState={globState} setGlobState={setGlobState} />
      <TodoList activity={activity} globState={globState} />
    </div>
  );
}

export default App;
