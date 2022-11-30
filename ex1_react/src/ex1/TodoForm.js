import React from "react";
import { useState } from "react";

function TodoForm({ setActivity }) {
  let getValue = () => {
    setActivity(document.getElementById("add_todo").value);
    console.log(document.getElementById("add_todo").value);
  };

  return (
    <div>
      <h2 class="label-wrapper label__lg">What needs to be done?</h2>
      <input
        type="text"
        id="add_todo"
        name="add_todo"
        class="input input__lg"
      ></input>
      <button type="submit" class="btn btn__primary btn__lg" onClick={getValue}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
