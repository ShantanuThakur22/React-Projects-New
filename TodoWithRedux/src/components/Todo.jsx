import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddFrom from "./AddFrom";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  console.log(todos);

  const handlecomple = (id) => {
    dispatch(markAsDone(id));
    console.log("completed");
  };

  return (
    <div>
      <AddFrom />

      <h2>Todo List</h2>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>
            {todo.task}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
            <button onClick={() => handlecomple(todo.id)}>isDone</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Todo;
