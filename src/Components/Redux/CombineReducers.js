import { combineReducers } from "redux";
import cartItems from "./Reducer";

const rootReducer = combineReducers({ cart: cartItems });

export default rootReducer;
