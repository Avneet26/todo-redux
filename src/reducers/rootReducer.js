import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    users: UserReducer,
});

export default rootReducer;
