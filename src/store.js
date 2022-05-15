import { legacy_createStore as createStore, combineReducers } from "redux"; //configureStore

const reducers = {};

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore();
