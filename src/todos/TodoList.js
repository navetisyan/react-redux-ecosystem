import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getIsLoading,
  getCompletedTodos,
  getIncompletedTodos,
} from "./selectors";
// import { completeTodo } from "./actions";
import {
  displayAlert,
  loadTodos,
  removeTodoRequest,
  updateTodoRequest,
} from "./thunks";
import { nanoid } from "nanoid";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  completedTodos,
  incompletedTodos,
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadToDoes,
}) => {
  debugger;

  console.log("TodoList rendered");

  useEffect(() => {
    startLoadToDoes();
  }, []);

  const loadingMsg = <div>Loading todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          key={nanoid()}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
      <h3>Complete:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={nanoid()}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </ListWrapper>
  );

  return isLoading ? loadingMsg : content;
};

const mapStatetoProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompletedTodos(state),
  isLoading: getIsLoading(state),
});
const mapDispatchtoProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(updateTodoRequest(id)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
  startLoadToDoes: () => dispatch(loadTodos()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoList);
