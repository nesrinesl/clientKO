import { compose, createStore } from "redux";
import RootReducer from "../Reducers/index";
import { applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
