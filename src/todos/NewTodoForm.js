import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
// import { createTodo } from "./actions";
import { addTodoRequest } from "./thunks";
import { getTodos } from "./selectors";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  console.log("NewTodoForm: rendered");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  todos: getTodos(state),
});
const mapDispatchtoProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(NewTodoForm);
