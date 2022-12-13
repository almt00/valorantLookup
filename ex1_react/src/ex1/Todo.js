import React, { useState } from "react";


function Todo({ activity, todoList, setToDoList }) {
  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (
    <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={activity.name}>
        New name for {activity.name}
      </label>
      <input id={activity.name} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
        Cancel
        <span className="visually-hidden">renaming {activity.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {activity.name}</span>
      </button>
    </div>
  </form>
  )

  const viewTemplate = (
    <div className="stack-small">
      <div class="c-cb" id="todoTitle">
        <input type="checkbox" id="checkbox" name="checkbox" value="" onChange={stateTodo}/>
        <label for="checkbox"> {activity.name}</label>
      </div>
      <div class="btn-group" id="btnGroup">
        <button id="edit" type="button" class="btn toggle-btn" onClick={() => setEditing(true)}> 
          edit
        </button>
        <button
          id="delete"
          type="button"
          class="btn btn__danger"
          onClick={deleteTodo}
        >
          delete
        </button>
      </div>
    </div>
  )

  function deleteTodo() {
    if (todoList != null || todoList != undefined) {
      let editedList = [...todoList];
      editedList.forEach((element, index) => {
        if (element == activity) {
          editedList.splice(index, 1);
          setToDoList([...editedList]);
        }
      });
    }
  }

  function editTodo () {

  }

  function stateTodo () {
    if (todoList != null || todoList != undefined) {
      let editedList = [...todoList];
      editedList.forEach((element, index) => {
        if (element == activity) {
          if (element.state === "active") {
            element.state = "completed"
          } else {
            element.state = "active"
          }
          setToDoList([...editedList]);
        }
      });
    }
  }

  return (
    <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>

  );
}

export default Todo;
