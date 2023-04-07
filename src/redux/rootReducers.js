import { combineReducers } from "redux";
import filterReducer from "./filters/filtersReducer";
import todoReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
