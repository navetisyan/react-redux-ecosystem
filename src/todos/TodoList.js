import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import "./TodoList.css";
import { removeTodo, completeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletePressed={onCompletePressed}
      />
    ))}
  </div>
);

const mapStatetoProps = (state) => ({
  todos: state.todos,
});
const mapDispatchtoProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoList);
