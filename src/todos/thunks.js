import {
  loadTodosInProgress,
  loadTodosInSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosInSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  console.log("addTodo thunk CALLING....");
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body,
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  console.log("removeTodo thunk CALLING....");
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });

    const removed_todo = await response.json();
    dispatch(removeTodo(removed_todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const updateTodoRequest = (id) => async (dispatch) => {
  console.log("updateTodoRequest thunk CALLING....");
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "post",
      }
    );

    const update_todo = await response.json();
    dispatch(completeTodo(update_todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
