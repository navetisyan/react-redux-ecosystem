// import { createTodo, removeTodo } from "./actions";
import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_IN_SUCCESS,
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  console.log("todos reducer CALLING...action=", action);
  const { type, payload } = action;
  debugger;
  // eslint-disable-next-line default-case
  switch (type) {
    case CREATE_TODO: {
      console.log("type:CREATE_TODO");
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      const { todo: removed_todo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removed_todo.id),
      };
    }
    case MARK_TODO_AS_COMPLETED: {
      const { todo: completed_todo } = payload;
      return state.map((todo) => {
        return {
          ...todo,
          isCompleted: todo.id === completed_todo.id ? true : todo.isCompleted,
        };
      });
    }
    case LOAD_TODOS_IN_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
