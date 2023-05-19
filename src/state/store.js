//import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { createStore } from "redux";


export const store = createStore(reducers , {} , applyMiddleware(thunk))