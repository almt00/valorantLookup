import Todo from "./Todo";
import React from "react";
import { useState, useEffect } from "react";

function TodoList({ activity, globState }) {
  let initialList = [
    {
      state: "active",
      name: "eat",
    },
    {
      state: "active",
      name: "sleep",
    },
    {
      state: "active",
      name: "repeat",
    },
  ];
  const [todoList, setToDoList] = useState(initialList);
  let filteredList = todoList.filter((element) => element.state === "active");
  let count = filteredList.length;

  useEffect(() => {
    if (activity !== "") {
      setToDoList([...todoList, { state: "active", name: activity }]);
    }
  }, [activity]);

  //let globState="active";

  return (
    <div>
      <h2>{count} tasks remaining</h2>
      <ul>
        {todoList.map((el) => {
          if (el.state === globState || globState === "all") {
            return (
              <Todo
                activity={el}
                todoList={todoList}
                setToDoList={setToDoList}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TodoList;
