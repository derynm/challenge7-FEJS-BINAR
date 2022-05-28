import { combineReducers } from "redux";
import reducerHome from "./homeReducers";

export default combineReducers({
    home: reducerHome, 
});
