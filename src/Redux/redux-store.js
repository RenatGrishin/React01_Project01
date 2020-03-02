import {combineReducers, createStore} from "redux";
import PostReducer from "./post-reducer";
import UserReducer from "./users-reducer";
import ProfileReducer from "./profile-reducer";

let reducers = combineReducers({
    PostReducer,
    UserReducer,
    ProfileReducer
});

let store = createStore(reducers);

export default store;