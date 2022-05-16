import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import "./TodoList.css";
import { removeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStatetoProps = (state) => ({
  todos: state.todos,
});
const mapDispatchtoProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoList);
