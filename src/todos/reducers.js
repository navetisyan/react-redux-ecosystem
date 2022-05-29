// import { createTodo, removeTodo } from "./actions";
import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_IN_SUCCESS,
} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_IN_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;
  debugger;
  // eslint-disable-next-line default-case
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const new_todo = {
        text,
        isCompleted: false,
      };
      return state.concat(new_todo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        return {
          ...todo,
          isCompleted: todo.text === text ? true : todo.isCompleted,
        };
      });
    }
    case LOAD_TODOS_IN_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
