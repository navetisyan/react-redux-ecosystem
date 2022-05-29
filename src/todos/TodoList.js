import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import "./TodoList.css";
import { removeTodo, completeTodo } from "./actions";
import { displayAlert, loadTodos } from "./thunks";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadToDoes,
}) => {
  debugger;
  useEffect(() => {
    startLoadToDoes();
  }, []);

  const loadingMsg = <div>Loading todos...</div>;
  const content = (
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

  return isLoading ? loadingMsg : content;
};

const mapStatetoProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchtoProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
  startLoadToDoes: () => dispatch(loadTodos()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoList);
