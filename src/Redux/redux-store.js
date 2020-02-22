import {combineReducers, createStore} from "redux";
import PostReducer from "./post-reducer";
import UserReducer from "./users-reducer";

let reducers = combineReducers({
    PostReducer,
    UserReducer
});

let store = createStore(reducers);

export default store;