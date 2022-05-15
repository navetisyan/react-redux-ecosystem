import { legacy_createStore as createStore, combineReducers } from "redux"; //configureStore
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore();
