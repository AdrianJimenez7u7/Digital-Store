import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const Middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...Middleware)
    composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;