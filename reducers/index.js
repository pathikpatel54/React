import { combineReducers } from 'redux';
import ToDoList from "./list-todo"

const rootReducer = combineReducers({
  list: ToDoList
});

export default rootReducer;