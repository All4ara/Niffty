import data from "./data";
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from "redux-thunk";


const initialState = {};

const reducer = (state, action) => {
    return { products: data.products };
}
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)));

export default store;