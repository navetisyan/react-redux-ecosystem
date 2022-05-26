// import { createTodo, removeTodo } from "./actions";
import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

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
    default:
      return state;
  }
};
