import { combineReducers } from "redux";
import categories from "./categories";
import products from "./product";

export default combineReducers({
    categories,products
})