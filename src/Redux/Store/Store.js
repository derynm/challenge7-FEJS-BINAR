import {  compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk  from "redux-thunk"
import combineReducers from "../Reducers/index"

const middlewareThunk = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
    
const store = createStore(combineReducers,middlewareThunk);

export default store;